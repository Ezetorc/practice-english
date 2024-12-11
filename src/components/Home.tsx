import { themes } from '../constants/themes'
import { useLanguage } from '../hooks/useLanguage'
import { ThemeLink } from './ThemeLink'
import { Title } from './Title'

export default function Home () {
  const { dictionary } = useLanguage()

  return (
    <main className='w-full min-h-[90vh] bg-persimmon flex flex-col gap-[40px]'>
      <Title
        main={[dictionary.practice, dictionary.boost, dictionary.improve]}
        sub={dictionary.yourEnglish}
        className='pl-[5%] mt-[5%]'
      />

      <section className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-[2%] place-items-center'>
        {themes.map(theme => (
          <ThemeLink theme={theme} key={`${theme.path}/theory`} />
        ))}
      </section>
    </main>
  )
}
