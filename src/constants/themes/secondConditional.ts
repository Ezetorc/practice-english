import { Theme } from '../../models/Theme'

export const secondConditional: Theme = {
  path: '/second-conditional',
  exercises: [
    'If I [had] (have) more money, I [would travel] (travel) around the world.',
    'She [would buy] (buy) a new car if she [could afford] (can afford) it.',
    'If he [knew] (know) the answer, he [would tell] (tell) you.',
    'We [would go] (go) to the party if we [were] (be) invited.',
    'If they [lived] (live) closer, we [would visit] (visit) them more often.'
  ],
  en: {
    title: 'Second Conditional',
    description:
      'To talk about hypothetical or unlikely situations in the present or future.',
    theory: {
      explanation:
        'The Second Conditional is used for situations that are unlikely or hypothetical in the present or future.',
      sentences: {
        affirmative: {
          structure: 'If + Past Simple, would + Verb',
          examples: [
            'If I had more time, I would learn to play guitar.',
            'If she were here, she would help us.'
          ]
        },
        negative: {
          structure: 'If + Past Simple, would not (wouldn’t) + Verb',
          examples: [
            'If he didn’t have a car, he wouldn’t drive to work.',
            'If they weren’t busy, they would join us.'
          ]
        },
        interrogative: {
          structure: 'Would + Subject + Verb + if + Past Simple + ?',
          examples: [
            'Would you travel if you had more money?',
            'Would she help if she knew the problem?'
          ]
        }
      },
      usageNotes:
        'Use the Second Conditional for unreal or unlikely situations in the present or future.'
    }
  },
  es: {
    title: 'Segundo Condicional',
    description:
      'Para hablar de situaciones hipotéticas o improbables en el presente o futuro.',
    theory: {
      explanation:
        'El Segundo Condicional se usa para situaciones improbables o hipotéticas en el presente o futuro.',
      sentences: {
        affirmative: {
          structure: 'Si + Pretérito Simple, would + Verbo',
          examples: [
            'If I had more time, I would learn to play guitar.',
            'If she were here, she would help us.'
          ]
        },
        negative: {
          structure: 'Si + Pretérito Simple, would not (wouldn’t) + Verbo',
          examples: [
            'If he didn’t have a car, he wouldn’t drive to work.',
            'If they weren’t busy, they would join us.'
          ]
        },
        interrogative: {
          structure: 'Would + Sujeto + Verbo + si + Pretérito Simple + ?',
          examples: [
            'Would you travel if you had more money?',
            'Would she help if she knew the problem?'
          ]
        }
      },
      usageNotes:
        'Se usa para situaciones irreales o improbables en el presente o futuro.'
    }
  }
}
