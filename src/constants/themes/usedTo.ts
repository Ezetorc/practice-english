import { Theme } from '../../models/Theme'

export const usedTo: Theme = {
  path: '/used-to',
  exercises: [
    'I [used to play] (play) soccer every weekend.',
    'She [didn’t use to like] (not like) vegetables.',
    '[Did] you [use to go] (go) to that school?',
    'He [used to work] (work) in a factory.',
    'They [used to have] (have) a dog.'
  ],
  en: {
    title: 'Used To',
    description: 'To talk about past habits or states.',
    theory: {
      explanation:
        'Used to is used to describe habits or states that were true in the past but are no longer true.',
      sentences: {
        affirmative: {
          structure: 'Subject + used to + Verb',
          examples: ['I used to play soccer.', 'She used to live in New York.']
        },
        negative: {
          structure: 'Subject + didn’t use to + Verb',
          examples: [
            'I didn’t use to like coffee.',
            'He didn’t use to exercise.'
          ]
        },
        interrogative: {
          structure: 'Did + Subject + use to + Verb + ?',
          examples: ['Did you use to play soccer?', 'Did she use to work here?']
        }
      },
      usageNotes:
        'Used to is only for past actions or states. For current habits, use the Present Simple.'
    }
  },
  es: {
    title: 'Used To',
    description: 'Para hablar de hábitos o estados pasados.',
    theory: {
      explanation:
        'Used to se usa para describir hábitos o estados que eran ciertos en el pasado pero ya no lo son.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + used to + Verbo',
          examples: ['I used to play soccer.', 'She used to live in New York.']
        },
        negative: {
          structure: 'Sujeto + didn’t use to + Verbo',
          examples: [
            'I didn’t use to like coffee.',
            'He didn’t use to exercise.'
          ]
        },
        interrogative: {
          structure: 'Did + Sujeto + use to + Verbo + ?',
          examples: ['Did you use to play soccer?', 'Did she use to work here?']
        }
      },
      usageNotes:
        'Used to solo se usa para acciones o estados pasados. Para hábitos actuales, usa el Presente Simple.'
    }
  }
}
