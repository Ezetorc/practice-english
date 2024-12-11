import { ChangeEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { Language } from '../models/Language'
import { Link } from 'react-router'

export function Header () {
  const { setLanguage, dictionary } = useLanguage()

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

  return (
    <header className='bg-tangerine w-full h-[10vh] sticky top-0 grid grid-cols-[1fr,2fr] z-[100]'>
      <div className='w-full h-[10vh]'>
        <Link
          to='/'
          className='flex flex-col justify-center items-center w-fit h-full text-[clamp(10px,5vw,30px)] xl:hover:text-selective-yellow md:hover:text-selective-yellow pl-[clamp(20px,5%,60px)]'
        >
          <span>Practice</span>
          <span>English.</span>
        </Link>
      </div>

      <div className='w-full h-[10vh] flex gap-x-[15%] justify-end pr-[clamp(20px,5%,60px)]'>
        <Link
          to='verbs-list'
          className='w-fit aspect-square flex justify-center items-center relative group text-[clamp(10px,5vw,30px)] text-center xl:hover:text-selective-yellow md:hover:text-selective-yellow whitespace-nowrap'
        >
          {dictionary.verbsList}
        </Link>

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
      </div>
    </header>
  )
}
