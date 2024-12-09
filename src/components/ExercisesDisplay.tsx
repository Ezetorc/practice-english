import { useCallback, useEffect, useRef, useState } from 'react'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { getParsedExercise } from '../utilities/getParsedExercise'
import { Title } from './Title'
import { ExerciseInput } from './ExerciseInput'
import { useNavigate } from 'react-router'
import { cleanInputs } from '../utilities/cleanInputs'
import { isLastExercise } from '../utilities/isLastExercise'
import { updateInputColors } from '../utilities/updateInputColors'
import { getParsedExerciseAnswers } from '../utilities/getParsedExerciseAnswers'
import { useLanguage } from '../hooks/useLanguage'
import { exercises } from '../constants/exercises'

export default function ExercisesDisplay ({ theme }: ThemeComponentProp) {
  const { dictionary } = useLanguage()
  const navigate = useNavigate()
  const [index, setIndex] = useState<number>(0)
  const inputs = useRef<HTMLInputElement[]>([])
  const exerciseContainer = useRef<HTMLDivElement | null>(null)
  const [exerciseCompleted, setExerciseCompleted] = useState<boolean>(false)
  const answers: string[][] = getParsedExerciseAnswers(getExercise())

  function getExercise (): (string | string[])[] {
    return getParsedExercise(exercises[theme.id][index])
  }

  const goToTheory = (): void => {
    navigate(theme.paths.theory)
  }

  const passExercise = useCallback((): void => {
    setExerciseCompleted(false)
    cleanInputs(inputs)

    if (!isLastExercise(index, theme)) {
      setIndex(prevIndex => prevIndex + 1)
    } else {
      navigate(theme.paths.completed)
    }
  }, [index, navigate, theme])

  const shakeExerciseContainer = (): void => {
    exerciseContainer.current?.classList.add('animate-shake')

    setTimeout(() => {
      exerciseContainer.current?.classList.remove('animate-shake')
    }, 400)
  }

  const checkExercise = useCallback((): void => {
    const checks: boolean[] = inputs.current.map((input, index) => {
      if (answers[index] === undefined || answers[index] === null) return false
      const result: boolean = answers[index].includes(input.value)
      updateInputColors(input, result)
      return result
    })

    if (checks.every(check => check === true)) {
      setExerciseCompleted(true)
    } else {
      shakeExerciseContainer()
    }
  }, [answers])

  const addToRefs = (input: HTMLInputElement | null): void => {
    if (input && !inputs.current.includes(input)) {
      inputs.current.push(input)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (!exerciseCompleted) {
          checkExercise()
        } else {
          passExercise()
        }
      }
    }

    window.addEventListener('keypress', handleKeyPress)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [exerciseCompleted, index, checkExercise, passExercise])

  return (
    <section className='w-full h-[90dvh] bg-persimmon flex flex-col justify-evenly px-[5%]'>
      <Title
        main={dictionary.themes[theme.id].title}
        sub={`${dictionary.exercises} ${index + 1}/${exercises[theme.id].length}`}
      />

      <div
        className='text-[clamp(20px,5vw,40px)] w-[clamp(300px,100%,1000px)]'
        ref={exerciseContainer}
      >
        {getExercise().map((part, index) => {
          if (typeof part === 'string') {
            return <span key={index}>{part}</span>
          }

          if (Array.isArray(part)) {
            return <ExerciseInput key={index} ref={addToRefs} />
          }

          return null
        })}
      </div>

      <div className='flex flex-col gap-[20px]'>
        {!exerciseCompleted ? (
          <button
            className='bg-medium-slate-blue w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform'
            onClick={checkExercise}
          >
            {dictionary.checkAnswer}
          </button>
        ) : (
          <button
            className='bg-correct w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform'
            onClick={passExercise}
          >
            {dictionary.next}
          </button>
        )}

        <button
          className='bg-selective-yellow w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform'
          onClick={goToTheory}
        >
          {dictionary.goBackToTheory}
        </button>
      </div>
    </section>
  )
}
