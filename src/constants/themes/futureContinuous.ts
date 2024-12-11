import { Theme } from '../../models/Theme'

export const futureContinuous: Theme = {
  path: '/future-continuous',
  exercises: [
    "I [will be finishing/'ll be finishing/ll be finishing] (finish) my homework tomorrow.",
    "She [will be leaving/'ll be leaving/ll be leaving] (leave) soon.",
    "They [will be traveling/'ll be traveling/ll be traveling] (travel) to Japan next year.",
    "We [will be watching/'ll be watching/ll be watching] (watch) that movie later.",
    "He [will be meeting/'ll be meeting/ll be meeting] (meet) her at the conference.",
    "The train [will be departing/'ll be departing/ll be departing] (depart) at noon.",
    "I [will be writing/'ll be writing/ll be writing] (write) the report by Friday.",
    "She [will be cooking/'ll be cooking/ll be cooking] (cook) dinner tonight.",

    "I [will not be finishing/won't be finishing/wont be ] (not finish) the project on time.",
    "He [will not be seeing/won't be seeing/wont be seeing] (not see) the email until tomorrow.",
    "They [will not be leaving/won't be leaving/wont be leaving] (not leave) before the storm passes.",
    "She [will not be hearing/won't be hearing/wont be hearing] (not hear) the news until later.",
    "We [will not be arriving/won't be arriving/wont be arriving] (not arrive) before the event starts.",
    "You [will not be cleaning/won't be cleaning/wont be cleaning] (not clean) the room before the guests arrive.",

    '[Will/will] I [be finishing] (finish) my work on time?',
    '[Will/will] he [be leaving] (leave) soon?',
    '[Will/will] they [be eating] (eat) dinner later?',
    'What [will/will] she [be doing] (do) tomorrow?',
    '[Will/will] it [be stopping] (stop) raining soon?',
    '[Will/will] you [be visiting] (visit) the museum next week?',
    'Why [will/will] they [be moving] (move) to another city?'
  ],
  en: {
    title: 'Future Continuous',
    description:
      'To talk about actions that will be ongoing at a specific time in the future.',
    theory: {
      explanation:
        'The Future Continuous is used to describe actions that will be in progress at a certain moment in the future.',
      sentences: {
        affirmative: {
          structure: 'Subject + will be + Verb-ing + (rest of the sentence)',
          examples: [
            'I will be working tomorrow.',
            'She will be traveling to Spain.',
            'They will be meeting at the event.'
          ]
        },
        negative: {
          structure:
            'Subject + will not (won’t) be + Verb-ing + (rest of the sentence)',
          examples: [
            'I will not be working tomorrow.',
            'She will not be traveling to Spain.',
            'They won’t be meeting at the event.'
          ]
        },
        interrogative: {
          structure:
            'Will + Subject + be + Verb-ing + (rest of the sentence) + ?',
          examples: [
            'Will I be working tomorrow?',
            'Will she be traveling to Spain?',
            'Will they be meeting at the event?'
          ]
        }
      },
      usageNotes:
        'The Future Continuous often uses time expressions like "tomorrow", "next week", or "at 5 PM". It emphasizes that an action will be happening at a particular moment in the future.'
    }
  },
  es: {
    title: 'Futuro Continuo',
    description:
      'Para hablar de acciones que estarán en progreso en un momento específico en el futuro.',
    theory: {
      explanation:
        'El Futuro Continuo se usa para describir acciones que estarán ocurriendo en un momento concreto del futuro.',
      sentences: {
        affirmative: {
          structure: 'Sujeto + will be + Verbo en -ing + (resto de la oración)',
          examples: [
            'I will be working tomorrow.',
            'She will be traveling to Spain.',
            'They will be meeting at the event.'
          ]
        },
        negative: {
          structure:
            'Sujeto + will not (won’t) be + Verbo en -ing + (resto de la oración)',
          examples: [
            'I will not be working tomorrow.',
            'She will not be traveling to Spain.',
            'They won’t be meeting at the event.'
          ]
        },
        interrogative: {
          structure:
            'Will + Sujeto + be + Verbo en -ing + (resto de la oración) + ?',
          examples: [
            '¿Will I be working tomorrow?',
            '¿Will she be traveling to Spain?',
            '¿Will they be meeting at the event?'
          ]
        }
      },
      usageNotes:
        'El Future Continuous suele usar expresiones de tiempo como "tomorrow", "next week" o "at 5 PM". Se utiliza para enfatizar que una acción estará ocurriendo en un momento determinado del futuro.'
    }
  }
}
