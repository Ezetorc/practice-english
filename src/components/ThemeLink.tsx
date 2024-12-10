import { Link } from 'react-router'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { useLanguage } from '../hooks/useLanguage'

export function ThemeLink ({ theme }: ThemeComponentProp) {
  const { getLanguage } = useLanguage()

  return (
    <Link
      to={`${theme.path}/theory`}
      className='bg-[#fff3] w-[clamp(290px,90%,800px)] aspect-[16/10] grid grid-rows-[1fr,4fr] rounded-[13px] overflow-hidden shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform'
    >
      <header className='bg-tekhelet pl-[4%] content-center text-[clamp(20px,3vw,60px)]'>
        {theme[getLanguage()].title}
      </header>
      <main className='bg-medium-slate-blue text-left p-[4%] text-[clamp(10px,5vw,40px)]'>
        {theme[getLanguage()].description}
      </main>
    </Link>
  )
}
