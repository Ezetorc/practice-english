import { Theme } from '../../models/Theme'

export const pastContinuous: Theme = {
  path: '/past-continuous',
  exercises: [
    'I [was watching] (watch) TV when you called.',
    'She [was studying] (study) all night.',
    'They [were playing] (play) football when it started to rain.',
    'We [were driving] (drive) to work at 8 AM.',
    'The children [were sleeping] (sleep) when their parents arrived.',
    'He [was reading] (read) a book during the flight.',
    'I [was cooking] (cook) dinner when the power went out.',
    'She [was talking] (talk) on the phone for hours.',

    "I [was not sleeping/wasn't sleeping/wasnt sleeping] (not sleep) when you texted me.",
    "He [was not working/wasn't working/wasnt working] (not work) yesterday afternoon.",
    "They [were not playing/weren't playing/werent playing] (not play) outside due to the storm.",
    "She [was not watching/wasn't watching/wasnt watching] (not watch) the movie.",
    "We [were not studying/weren't studying/werent studying] (not study) for the exam.",
    "You [were not listening/weren't listening/werent listening] (not listen) to the teacher.",

    '[Was/was] he [reading] (read) when you arrived?',
    '[Were/were] they [playing] (play) in the garden?',
    'What [was/was] she [doing] (do) at 10 AM?',
    '[Was/was] it [raining] (rain) when you left?',
    '[Were/were] you [talking] (talk) to him yesterday?',
    'Why [were/were] they [laughing] (laugh) so much?'
  ],
  en: {
    title: 'Past Continuous',
    description:
      'To talk about actions that were ongoing at a specific moment in the past.',
    theory: {
      explanation:
        'The Past Continuous is used to describe actions that were in progress at a particular moment in the past or when another action happened.',
      sentences: {
        affirmative: {
          structure: 'Subject + was/were + Verb-ing + (rest of the sentence)',
          examples: [
            'I was reading a book.',
            'She was working on her project.',
            'They were playing soccer.'
          ]
        },
        negative: {
          structure:
            'Subject + was/were + not + Verb-ing + (rest of the sentence)',
          examples: [
            'I was not reading a book.',
            'She was not working on her project.',
            'They were not playing soccer.'
          ]
        },
        interrogative: {
          structure:
            'Was/Were + Subject + Verb-ing + (rest of the sentence) + ?',
          examples: [
            'Was I reading a book?',
            'Was she working on her project?',
            'Were they playing soccer?'
          ]
        }
      },
      usageNotes:
        'The Past Continuous is often used with time expressions like "when", "while", "at that moment", or "yesterday at 3 PM".'
    }
  },
  es: {
    title: 'Pasado Continuo',
    description:
      'Para hablar de acciones que estaban en progreso en un momento específico del pasado.',
    theory: {
      explanation:
        'El Pasado Continuo se usa para describir acciones que estaban ocurriendo en un momento particular del pasado o cuando otra acción sucedió.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + was/were + Verbo-ing + (resto de la oración)',
          examples: [
            'I was reading a book.',
            'She was working on her project.',
            'They were playing soccer.'
          ]
        },
        negative: {
          structure:
            'Sujeto + was/were + not + Verbo-ing + (resto de la oración)',
          examples: [
            'I was not reading a book.',
            'She was not working on her project.',
            'They were not playing soccer.'
          ]
        },
        interrogative: {
          structure:
            'Was/Were + Sujeto + Verbo-ing + (resto de la oración) + ?',
          examples: [
            'Was I reading a book?',
            'Was she working on her project?',
            'Were they playing soccer?'
          ]
        }
      },
      usageNotes:
        'El Pasado Continuo se usa a menudo con expresiones de tiempo como "when", "while", "at that moment", o "yesterday at 3 PM".'
    }
  }
}
