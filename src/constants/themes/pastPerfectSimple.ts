import { Theme } from '../../models/Theme'

export const pastPerfectSimple: Theme = {
  path: '/past-perfect-simple',
  exercises: [
    'I [had finished] (finish) my homework before dinner.',
    'She [had left] (leave) when you arrived.',
    'They [had traveled] (travel) to Japan before they moved to Europe.',
    'We [had seen] (see) that movie before.',
    'He [had met] (meet) her before the conference started.',
    'The train [had departed] (depart) before we got to the station.',
    'I [had written] (write) the report before the deadline.',
    'She [had cooked] (cook) dinner when we arrived.',

    "I [had not finished/hadn't finished/hadnt finished] (not finish) the project before the meeting.",
    "He [had not seen/hadn't seen/hadnt seen] (not see) the email before yesterday.",
    "They [had not left/hadn't left/hadnt left] (not leave) the house before the storm hit.",
    "She [had not heard/hadn't heard/hadnt heard] (not hear) the news until today.",
    "We [had not arrived/hadn't arrived/hadnt arrived] (not arrive) before the event started.",
    "You [had not cleaned/hadn't cleaned/hadnt cleaned] (not clean) the room before the guests came.",

    '[Had/had] he [finished] (finish) his work before the deadline?',
    '[Had/had] they [eaten] (eat) dinner when you called?',
    'What [had/had] she [done] (do) before the party?',
    '[Had/had] it [stopped] (stop) raining when you left?',
    '[Had/had] you [visited] (visit) the museum before?',
    'Why [had/had] they [moved] (move) to another city?'
  ],
  en: {
    title: 'Past Perfect Simple',
    description:
      'To talk about actions that were completed before another past action or point in time.',
    theory: {
      explanation:
        'The Past Perfect Simple is used to describe an action that was completed before another action or a specific point in the past.',
      sentences: {
        affirmative: {
          structure: 'Subject + had + Past Participle + (rest of the sentence)',
          examples: [
            'I had finished my work.',
            'She had traveled to Spain.',
            'They had met before the event.'
          ]
        },
        negative: {
          structure:
            'Subject + had not + Past Participle + (rest of the sentence)',
          examples: [
            'I had not finished my work.',
            'She had not traveled to Spain.',
            'They had not met before the event.'
          ]
        },
        interrogative: {
          structure:
            'Had + Subject + Past Participle + (rest of the sentence) + ?',
          examples: [
            'Had I finished my work?',
            'Had she traveled to Spain?',
            'Had they met before the event?'
          ]
        }
      },
      usageNotes:
        'The Past Perfect Simple often uses time expressions like "before", "after", "by the time", or "when".'
    }
  },
  es: {
    title: 'Pasado Perfecto Simple',
    description:
      'Para hablar de acciones que se completaron antes de otra acción o momento en el pasado.',
    theory: {
      explanation:
        'El Pasado Perfecto Simple se usa para describir una acción que se completó antes de otra acción o un momento específico en el pasado.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + had + Participio Pasado + (resto de la oración)',
          examples: [
            'I had finished my work.',
            'She had traveled to Spain.',
            'They had met before the event.'
          ]
        },
        negative: {
          structure:
            'Sujeto + had not + Participio Pasado + (resto de la oración)',
          examples: [
            'I had not finished my work.',
            'She had not traveled to Spain.',
            'They had not met before the event.'
          ]
        },
        interrogative: {
          structure:
            'Had + Sujeto + Participio Pasado + (resto de la oración) + ?',
          examples: [
            'Had I finished my work?',
            'Had she traveled to Spain?',
            'Had they met before the event?'
          ]
        }
      },
      usageNotes:
        'El Pasado Perfecto Simple suele utilizar expresiones de tiempo como "before", "after", "by the time" o "when".'
    }
  }
}
