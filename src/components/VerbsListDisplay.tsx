import { verbsList } from '../constants/verbsList'
import { useLanguage } from '../hooks/useLanguage'
import { Title } from './Title'

export default function VerbsListDisplay () {
  const { dictionary } = useLanguage()

  return (
    <section className='w-full min-h-[90vh] bg-persimmon flex flex-col'>
      <Title main='Verbs List' className='pl-[5%] mt-[5%]' />

      <div className='overflow-x-auto flex ts:justify-center md:justify-center xl:justify-start xl:ml-[5%] mt-[5%]'>
        <table className='text-left border-collapse w-[clamp(300px,95%,1200px)]'>
          <thead className='bg-tekhelet text-white'>
            <tr>
              <th className='p-4'>{dictionary.infinite}</th>
              <th className='p-4'>{dictionary.pastSimple}</th>
              <th className='p-4'>{dictionary.pastParticiple}</th>
            </tr>
          </thead>

          <tbody className='bg-medium-slate-blue text-white'>
            {verbsList.map((verbs, index) => (
              <tr key={index}>
                {verbs.map((verb, i) => (
                  <td key={i} className='p-4 border-b border-white'>
                    {verb}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
