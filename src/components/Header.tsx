import { ChangeEvent } from 'react'
import { LanguageIcon } from './Icons'
import { useLanguage } from '../hooks/useLanguage'
import { Language } from '../models/Language'

export function Header () {
  const { setLanguage } = useLanguage()

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

  return (
    <header className='bg-tangerine w-full h-[10vh] sticky top-0 flex justify-between px-[5%] z-[100]'>
      <a
        href='/'
        className='flex flex-col justify-center items-center w-fit h-full text-[clamp(10px,5vw,30px)] xl:hover:text-selective-yellow md:hover:text-selective-yellow'
      >
        <span>Practice</span>
        <span>English.</span>
      </a>

      <div className='w-[80px] aspect-square flex justify-center items-center relative group'>
        <LanguageIcon
          size='60px'
          color='#FFF'
          className='absolute z-[105] xl:group-hover:fill-selective-yellow md:group-hover:fill-selective-yellow'
        />
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
