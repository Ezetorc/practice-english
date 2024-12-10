import { Theme } from '../../models/Theme'

export const presentSimple: Theme = {
  path: '/present-simple',
  exercises: [
    'I [live] (live) in London.',
    'She [works] (work) in a restaurant.',
    'Lisa [reads] (read) a book every night before she [goes] (go) to bed.',
    'My brother [fixes] (fix) computers for a living.',
    'The train [leaves] (leave) at 6 PM every day.',
    'The sun [rises] (rise) in the east and [sets] (set) in the west.',
    'Dogs [bark] (bark) when they [see] (see) strangers.',
    'Water [boils] (boil) at 100 degrees Celsius.',

    "She [does not like/doesn't like/doesnt like] (not like) to eat vegetables.",
    "We [do not go/don't go/dont go] (not go) to the gym on Sundays.",
    "Tom [does not work/doesn't work/doesnt work] (not work) on weekends.",
    "They [do not play/don't play/dont play] (not play) basketball.",
    "He [does not watch/doesn't watch/doesnt watch] (not watch) the news.",
    "She [does not drive/doesn't drive/doesnt drive] (not drive) at night.",

    'Does he [know] (know) how to play the piano?',
    'Where [does] (do) your brother [work] (work)?',
    'Do you [like] (like) chocolate?',
    'Does she [speak] (speak) English fluently?',
    'Do they [go] (go) to the park every Saturday?',
    'What time [does] (do) the train [leave] (leave)?'
  ],
  en: {
    title: 'Present Simple',
    description:
      'To talk about things that happen regularly, facts, general truths, or things that are always true.',
    theory: {
      explanation:
        'The Present Simple is used for actions that are habitual, general truths, or things that are always true.',
      sentences: {
        affirmative: {
          structure:
            'Subject + Base Verb (in the infinitive form) + (rest of the sentence)',
          examples: [
            'I play football every weekend.',
            'She works at a bank.',
            'They study English every day.'
          ]
        },
        negative: {
          structure:
            'Subject + do/does + not + Base Verb + (rest of the sentence)',
          examples: [
            'I do not play football every weekend.',
            'She does not work at a bank.',
            'They do not study English every day.'
          ]
        },
        interrogative: {
          structure:
            'Do/Does + Subject + Base Verb + (rest of the sentence) + ?',
          examples: [
            'Do you play football every weekend?',
            'Does she work at a bank?',
            'Do they study English every day?'
          ]
        }
      },
      usageNotes:
        'The Present Simple is often used with adverbs of frequency like "always", "usually", "never".'
    }
  },
  es: {
    title: 'Presente Simple',
    description:
      'Para hablar de cosas que suceden regularmente, hechos, verdades generales o cosas que siempre son ciertas.',
    theory: {
      explanation:
        'El Presente Simple se usa para acciones que son habituales, verdades generales o cosas que siempre son ciertas.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + Verbo base (en su forma infinitiva) + (resto de la oración)',
          examples: [
            'I play football every weekend.',
            'She works at a bank.',
            'They study English every day.'
          ]
        },
        negative: {
          structure:
            'Sujeto + do/does + not + Verbo base + (resto de la oración)',
          examples: [
            'I do not play football every weekend.',
            'She does not work at a bank.',
            'They do not study English every day.'
          ]
        },
        interrogative: {
          structure:
            'Do/Does + Sujeto + Verbo base + (resto de la oración) + ?',
          examples: [
            'Do you play football every weekend?',
            'Does she work at a bank?',
            'Do they study English every day?'
          ]
        }
      },
      usageNotes:
        'El Presente Simple se usa a menudo con adverbios de frecuencia como "always", "usually", "never".'
    }
  }
}
