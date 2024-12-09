import { useRef, useState } from 'react'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { getParsedExercise } from '../utilities/getParsedExercise'
import { Title } from './Title'
import { ExerciseInput } from './ExerciseInput'
import { useNavigate } from 'react-router'

export default function ExercisesDisplay ({ theme }: ThemeComponentProp) {
  const navigate = useNavigate()
  const [index, setIndex] = useState<number>(0)
  const inputs = useRef<HTMLInputElement[]>([])
  const answers: string[][] = getExercise().filter((part): part is string[] =>
    Array.isArray(part)
  )

  function getExercise () {
    return getParsedExercise(theme.exercises.exercises[index])
  }

  const handleCheck = (): void => {
    const checks: boolean[] = []

    inputs.current.forEach((input, index) => {
      const result: boolean = answers[index].includes(input.value)
      checks.push(result)
    })

    if (checks.every(check => check === true)) {
      inputs.current.forEach(input => {
        input.value = ''
      })

      inputs.current = []

      if (index + 1 >= theme.exercises.exercises.length) {
        navigate(`/completed/${theme.title}`)
        return
      }

      setIndex(prevIndex => prevIndex + 1)
    }
  }

  const addToRefs = (input: HTMLInputElement | null): void => {
    if (input && !inputs.current.includes(input)) {
      inputs.current.push(input)
    }
  }

  return (
    <section className='w-full min-h-screen bg-persimmon p-6 flex flex-col px-[5%]'>
      <Title main={theme.title} sub='EXERCISES' />

      <div className='text-[clamp(20px,5vw,40px)]'>
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

      <div>
        <button
          className='bg-medium-slate-blue w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform my-[5%]'
          onClick={handleCheck}
        >
          Check
        </button>
      </div>
    </section>
  )
}
