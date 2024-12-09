import { themes } from '../constants/themes'
import { ThemeLink } from './ThemeLink'
import { Title } from './Title'

export default function Home () {
  return (
    <main className='w-full min-h-screen bg-persimmon pt-[5%] flex flex-col gap-[40px]'>
      <Title main={['PRACTICE', 'BOOST', 'IMPROVE']} sub='YOUR ENGLISH' />

      <section className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-[2%] place-items-center'>
        {themes.map(theme => (
          <ThemeLink theme={theme} key={theme.path} />
        ))}
      </section>
    </main>
  )
}