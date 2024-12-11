import { Theme } from '../../models/Theme'

export const pastPerfectContinuous: Theme = {
  path: '/past-perfect-continuous',
  exercises: [
    'I [had been studying] (study) for hours before the exam started.',
    'She [had been working] (work) at the company for five years before she resigned.',
    'They [had been traveling] (travel) for months before they settled down.',
    'We [had been waiting] (wait) for an hour when the bus finally arrived.',
    'He [had been running] (run) for an hour when it started to rain.',
    'The children [had been playing] (play) outside before it got dark.',
    'I [had been cooking] (cook) dinner when the guests arrived.',
    'She [had been talking] (talk) on the phone for an hour when I called.',

    "I [had not been studying/hadn't been studying/hadnt been studying] (not study) long enough before the test.",
    "He [had not been sleeping/hadn't been sleeping/hadnt been sleeping] (not sleep) well before his trip.",
    "They [had not been practicing/hadn't been practicing/hadnt been practicing] (not practice) enough before the concert.",
    "She [had not been working/hadn't been working/hadnt been working] (not work) there long before she left.",
    "We [had not been waiting/hadn't been waiting/hadnt been waiting] (not wait) long before the meeting started.",
    "You [had not been reading/hadn't been reading/hadnt been reading] (not read) much before the discussion.",

    '[Had/had] he [been studying] (study) long before the exam?',
    '[Had/had] they [been playing] (play) for hours before dinner?',
    'What [had/had] she [been doing] (do) before you arrived?',
    '[Had/had] it [been raining] (rain) for a while before you left?',
    '[Had/had] you [been working] (work) hard before the project finished?',
    'Why [had/had] they [been arguing] (argue) before the party?'
  ],
  en: {
    title: 'Past Perfect Continuous',
    description:
      'To talk about actions that were ongoing over a period of time before another past action or point in time.',
    theory: {
      explanation:
        'The Past Perfect Continuous is used to describe an action that was ongoing before another action or specific point in the past.',
      sentences: {
        affirmative: {
          structure: 'Subject + had been + Verb-ing + (rest of the sentence)',
          examples: [
            'I had been studying for hours.',
            'She had been working at the company.',
            'They had been traveling for months.'
          ]
        },
        negative: {
          structure:
            'Subject + had not been + Verb-ing + (rest of the sentence)',
          examples: [
            'I had not been studying for hours.',
            'She had not been working at the company.',
            'They had not been traveling for months.'
          ]
        },
        interrogative: {
          structure:
            'Had + Subject + been + Verb-ing + (rest of the sentence) + ?',
          examples: [
            'Had I been studying for hours?',
            'Had she been working at the company?',
            'Had they been traveling for months?'
          ]
        }
      },
      usageNotes:
        'The Past Perfect Continuous often uses time expressions like "for", "since", "before", or "by the time".'
    }
  },
  es: {
    title: 'Pasado Perfecto Continuo',
    description:
      'Para hablar de acciones que estaban en progreso durante un tiempo antes de otra acción o momento en el pasado.',
    theory: {
      explanation:
        'El Pasado Perfecto Continuo se usa para describir una acción que estuvo ocurriendo antes de otra acción o un momento específico en el pasado.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + had been + Verbo-ing + (resto de la oración)',
          examples: [
            'I had been studying for hours.',
            'She had been working at the company.',
            'They had been traveling for months.'
          ]
        },
        negative: {
          structure:
            'Sujeto + had not been + Verbo-ing + (resto de la oración)',
          examples: [
            'I had not been studying for hours.',
            'She had not been working at the company.',
            'They had not been traveling for months.'
          ]
        },
        interrogative: {
          structure:
            'Had + Sujeto + been + Verbo-ing + (resto de la oración) + ?',
          examples: [
            'Had I been studying for hours?',
            'Had she been working at the company?',
            'Had they been traveling for months?'
          ]
        }
      },
      usageNotes:
        'El Pasado Perfecto Continuo suele utilizar expresiones de tiempo como "for", "since", "before", o "by the time".'
    }
  }
}
