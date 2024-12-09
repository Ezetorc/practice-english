import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { Title } from './Title'

export default function ThemeTheory ({ theme }: ThemeComponentProp) {
  const getSentenceType = (key: string): string => {
    return key.charAt(0).toUpperCase() + key.slice(1)
  }

  return (
    <section className='w-full min-h-screen bg-persimmon p-6'>
      <Title main={theme.title} sub='THEORY' />

      <article className='space-y-8'>
        <section>
          <h2 className='text-xl font-bold'>Explanation</h2>
          <p className='text-lg'>{theme.theory.explanation}</p>
        </section>

        <section>
          <h2 className='text-xl font-bold'>Sentences</h2>
          {Object.entries(theme.theory.sentences).map(
            ([key, sentence], index) => (
              <div key={index} className='space-y-4'>
                <div className='text-lg font-semibold'>{`${getSentenceType(
                  key
                )} Structure: ${sentence.structure}`}</div>

                <ul className='list-disc pl-6 space-y-2'>
                  {sentence.examples.map((example, idx) => (
                    <li key={idx} className='text-base'>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>

        <section>
          <h2 className='text-xl font-bold'>Usage Notes</h2>
          <p className='text-lg'>{theme.theory.usageNotes}</p>
        </section>
      </article>
    </section>
  )
}
