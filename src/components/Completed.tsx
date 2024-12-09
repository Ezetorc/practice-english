import { Link } from 'react-router'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { Title } from './Title'

export default function Completed ({ theme }: ThemeComponentProp) {
  return (
    <section className='w-full min-h-screen bg-persimmon p-6 flex flex-col px-[5%]'>
      <Title main={`${theme.title} Exercises`} sub='COMPLETED' />

      <Link
        to="/"
        className='bg-medium-slate-blue w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform my-[5%]'
      >
        Home
      </Link>
    </section>
  )
}
