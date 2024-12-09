import { Link } from 'react-router'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { Title } from './Title'
import { useLanguage } from '../hooks/useLanguage'

export default function Completed ({ theme }: ThemeComponentProp) {
  const { dictionary } = useLanguage()

  return (
    <section className='w-full min-h-[90vh] bg-persimmon flex flex-col px-[5%]'>
      <Title
        main={`${dictionary.themes[theme.id].title} ${dictionary.exercises}`}
        sub={dictionary.completed}
      />

      <Link
        to='/'
        className='bg-medium-slate-blue w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform my-[5%]'
      >
        {dictionary.home}
      </Link>
    </section>
  )
}
