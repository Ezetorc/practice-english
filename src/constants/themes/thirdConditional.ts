import { Theme } from '../../models/Theme'

export const thirdConditional: Theme = {
  path: '/third-conditional',
  exercises: [
    'If I [had known] (know) about the meeting, I [would have attended] (attend).',
    'She [would have passed] (pass) the exam if she [had studied] (study) harder.',
    'If they [had left] (leave) earlier, they [would not have missed] (not miss) the train.',
    'He [would have helped] (help) us if we [had asked] (ask) him.',
    'If you [had called] (call) me, I [would have come] (come) immediately.'
  ],
  en: {
    title: 'Third Conditional',
    description: 'To talk about hypothetical situations in the past.',
    theory: {
      explanation:
        'The Third Conditional is used for past situations that did not happen and their possible outcomes.',
      sentences: {
        affirmative: {
          structure: 'If + Past Perfect, would have + Past Participle',
          examples: [
            'If I had known, I would have told you.',
            'If she had studied, she would have passed.'
          ]
        },
        negative: {
          structure:
            'If + Past Perfect, would not (wouldn’t) have + Past Participle',
          examples: [
            'If they had left earlier, they wouldn’t have missed the train.',
            'If he had tried, he wouldn’t have failed.'
          ]
        },
        interrogative: {
          structure:
            'Would + Subject + have + Past Participle + if + Past Perfect + ?',
          examples: [
            'Would you have helped if I had asked?',
            'Would she have come if you had invited her?'
          ]
        }
      },
      usageNotes:
        'Use the Third Conditional for regrets or missed opportunities in the past.'
    }
  },
  es: {
    title: 'Tercer Condicional',
    description: 'Para hablar de situaciones hipotéticas en el pasado.',
    theory: {
      explanation:
        'El Tercer Condicional se usa para situaciones pasadas que no ocurrieron y sus posibles consecuencias.',
      sentences: {
        affirmative: {
          structure: 'Si + Pluscuamperfecto, would have + Participio pasado',
          examples: [
            'If I had known, I would have told you.',
            'If she had studied, she would have passed.'
          ]
        },
        negative: {
          structure:
            'Si + Pluscuamperfecto, would not (wouldn’t) have + Participio pasado',
          examples: [
            'If they had left earlier, they wouldn’t have missed the train.',
            'If he had tried, he wouldn’t have failed.'
          ]
        },
        interrogative: {
          structure:
            'Would + Sujeto + have + Participio pasado + si + Pluscuamperfecto + ?',
          examples: [
            'Would you have helped if I had asked?',
            'Would she have come if you had invited her?'
          ]
        }
      },
      usageNotes:
        'Se usa para expresar arrepentimientos o oportunidades perdidas en el pasado.'
    }
  }
}
