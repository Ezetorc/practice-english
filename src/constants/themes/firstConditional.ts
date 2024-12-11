import { Theme } from '../../models/Theme'

export const firstConditional: Theme = {
  path: '/first-conditional',
  exercises: [
    "If it [rains] (rain), we [will stay] (stay) at home.",
    "You [will pass] (pass) the exam if you [study] (study) hard.",
    "If she [calls] (call), I [will answer] (answer) immediately.",
    "He [will get] (get) wet if he [doesn't take] (not take) an umbrella.",
    "We [will go] (go) to the beach if it [is] (be) sunny."
  ],
  en: {
    title: 'First Conditional',
    description: 'To talk about real or likely situations in the future.',
    theory: {
      explanation:
        'The First Conditional is used for situations that are possible or likely to happen in the future.',
      sentences: {
        affirmative: {
          structure: 'If + Present Simple, will + Verb',
          examples: [
            'If it rains, we will stay home.',
            'If you study, you will pass the exam.'
          ]
        },
        negative: {
          structure: 'If + Present Simple, will not (won’t) + Verb',
          examples: [
            'If you don’t study, you won’t pass the exam.',
            'If it doesn’t rain, we won’t stay home.'
          ]
        },
        interrogative: {
          structure: 'Will + Subject + Verb + if + Present Simple + ?',
          examples: [
            'Will you stay home if it rains?',
            'Will she come if I invite her?'
          ]
        }
      },
      usageNotes:
        'Use First Conditional for real future possibilities and likely outcomes.'
    }
  },
  es: {
    title: 'Primer Condicional',
    description: 'Para hablar de situaciones reales o probables en el futuro.',
    theory: {
      explanation:
        'El Primer Condicional se usa para situaciones que son posibles o probables en el futuro.',
      sentences: {
        affirmative: {
          structure: 'Si + Presente Simple, will + Verbo',
          examples: [
            'If it rains, we will stay home.',
            'If you study, you will pass the exam.'
          ]
        },
        negative: {
          structure: 'Si + Presente Simple, will not (won’t) + Verbo',
          examples: [
            'If you don’t study, you won’t pass the exam.',
            'If it doesn’t rain, we won’t stay home.'
          ]
        },
        interrogative: {
          structure: 'Will + Sujeto + Verbo + si + Presente Simple + ?',
          examples: [
            'Will you stay home if it rains?',
            'Will she come if I invite her?'
          ]
        }
      },
      usageNotes:
        'Se usa para posibilidades reales y resultados probables en el futuro.'
    }
  }
}
