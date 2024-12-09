import { Link } from 'react-router'
import { ThemeComponentProp } from '../models/ThemeComponentProp'
import { Title } from './Title'
import { getSentenceClass } from '../utilities/getSentenceClass'
import { getSentenceType } from '../utilities/getSentenceType'

export default function TheoryDisplay ({ theme }: ThemeComponentProp) {
  return (
    <section className='w-full min-h-screen bg-persimmon p-6 flex flex-col px-[5%]'>
      <Title main={theme.title} sub='THEORY' />

      <article className='flex flex-col items-center w-[clamp(300px,70%,1000px)]'>
        <section>
          <h2 className='font-roboto-bold text-[clamp(30px,5vw,60px)] underline'>
            Explanation
          </h2>
          <p className='font-roboto-regular text-[clamp(20px,4vw,40px)]'>
            {theme.theory.explanation}
          </p>
        </section>

        <section>
          <h2 className='font-roboto-bold text-[clamp(30px,5vw,60px)] underline'>
            Structures
          </h2>
          {Object.entries(theme.theory.sentences).map(
            ([key, sentence], sentenceIndex) => (
              <div key={sentenceIndex} className='my-[4%]'>
                <span className='font-roboto-regular text-[clamp(20px,4vw,40px)]'>
                  <b
                    className={`font-roboto-bold drop-shadow-[0_1.2px_0.2px_#FFFFFFcc] ${getSentenceClass(
                      key
                    )}`}
                  >{`${getSentenceType(key)}: `}</b>
                  {`${sentence.structure}`}
                </span>

                <ul className='list-inside list-disc pl-6 space-y-2'>
                  {sentence.examples.map((example, exampleIndex) => (
                    <li
                      key={exampleIndex}
                      className='font-roboto-regular text-[clamp(20px,4vw,40px)]'
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>

        <section>
          <h2 className='font-roboto-bold text-[clamp(30px,5vw,60px)] underline'>
            Usage Notes
          </h2>
          <p className='font-roboto-regular text-[clamp(20px,4vw,40px)]'>
            {theme.theory.usageNotes}
          </p>
        </section>
      </article>

      <footer>
        <Link
          to={theme.exercises.path}
          className='bg-medium-slate-blue w-full text-center block h-[100px] content-center rounded-[13px] text-[clamp(20px,7vw,40px)] shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform my-[5%]'
        >
          Exercises
        </Link>
      </footer>
    </section>
  )
}
