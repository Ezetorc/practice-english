import { ChangeEvent, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { Language } from '../models/Language'
import { useNavigate } from 'react-router'
import { Modal } from './Modal'
import { isExercisesPage } from '../utilities/isExercisesPage'

export function Header () {
  const {
    setLanguage,
    dictionary,
    isLoseProgressModalOpen,
    setIsLoseProgressModalOpen
  } = useLanguage()
  const [lastPath, setLastPath] = useState<string>('/')
  const navigate = useNavigate()

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

  const leavePage = (): void => {
    navigate(lastPath)
    setIsLoseProgressModalOpen(false)
  }

  const handleClick = (path: string): void => {
    setLastPath(path)

    if (isExercisesPage()) {
      setIsLoseProgressModalOpen(true)
    } else {
      navigate(path)
    }
  }

  return (
    <header className='bg-tangerine w-full h-[10vh] sticky top-0 flex justify-start gap-[5%] items-center z-[100]'>
      <Modal
        isOpen={isLoseProgressModalOpen}
        title='Warning!'
        onClose={() => setIsLoseProgressModalOpen(false)}
      >
        <div className='flex flex-col justify-between w-full gap-[20px]'>
          <p className='text-[clamp(10px,5vw,30px)]'>
            {dictionary.loseProgressAdvice}
          </p>

          <div className='flex gap-[5%]'>
            <button
              className='bg-persimmon p-[4%] rounded-[13px] xl:hover:bg-white xl:hover:text-persimmon text-[clamp(20px,4vw,25px)]'
              onClick={() => leavePage()}
            >
              Leave
            </button>
            <button
              className='text-persimmon p-[4%] rounded-[13px] xl:hover:bg-white xl:hover:text-persimmon text-[clamp(20px,4vw,25px)]'
              onClick={() => setIsLoseProgressModalOpen(false)}
            >
              Stay
            </button>
          </div>
        </div>
      </Modal>

      <button
        className='flex flex-col justify-center items-center w-fit h-full text-[clamp(10px,5vw,30px)] xl:hover:text-selective-yellow md:hover:text-selective-yellow pl-[clamp(20px,5%,60px)]'
        onClick={() => handleClick('/')}
      >
        {dictionary.home}
      </button>

      <button
        className='w-fit aspect-square flex justify-center items-center relative group text-[clamp(10px,5vw,30px)] text-center xl:hover:text-selective-yellow md:hover:text-selective-yellow whitespace-nowrap'
        onClick={() => handleClick('/verbs-list')}
      >
        {dictionary.verbsList}
      </button>

      <div className='w-fit h-full aspect-square flex justify-center items-center relative text-[clamp(10px,5vw,30px)] xl:hover:text-selective-yellow md:hover:text-selective-yellow text-center'>
        {dictionary.languages}
        <select
          className='absolute w-full h-full opacity-0 cursor-pointer z-[110] border-none bg-tangerine'
          onChange={changeLanguage}
        >
          <option className='text-[clamp(10px,5vw,30px)]' value='en'>
            English
          </option>
          <option className='text-[clamp(10px,5vw,30px)]' value='es'>
            Español
          </option>
        </select>
      </div>
    </header>
  )
}
