import { Theme } from '../../models/Theme'

export const futurePerfectSimple: Theme = {
  path: '/future-perfect-simple',
  exercises: [
    "I [will have finished/'ll have finished/ll have finished] (finish) my homework by tomorrow.",
    "She [will have left/'ll have left/ll have left] (leave) by the time you arrive.",
    "They [will have traveled/'ll have traveled/ll have traveled] (travel) to Japan by next year.",
    "We [will have watched/'ll have watched/ll have watched] (watch) that movie before dinner.",
    "He [will have met/'ll have met/ll have met] (meet) her at the conference by then.",
    "The train [will have departed/'ll have departed/ll have departed] (depart) by noon.",
    "I [will have written/'ll have written/ll have written] (write) the report by Friday.",
    "She [will have cooked/'ll have cooked/ll have cooked] (cook) dinner by the time you arrive.",

    "I [will not have finished/won't have finished/wont have finished] (not finish) the project by the deadline.",
    "He [will not have seen/won't have seen/wont have seen] (not see) the email by tomorrow.",
    "They [will not have left/won't have left/wont have left] (not leave) before the storm arrives.",
    "She [will not have heard/won't have heard/wont have heard] (not hear) the news by then.",
    "We [will not have arrived/won't have arrived/wont have arrived] (not arrive) before the event starts.",
    "You [will not have cleaned/won't have cleaned/wont have cleaned] (not clean) the room by the time guests arrive.",

    '[Will/will] I [have finished] (finish) my work by the deadline?',
    '[Will/will] he [have left] (leave) by the time we arrive?',
    '[Will/will] they [have eaten] (eat) by 7 PM?',
    'What [will/will] she [have done] (do) by tomorrow?',
    '[Will/will] it [have stopped] (stop) raining by noon?',
    '[Will/will] you [have visited] (visit) the museum by next week?',
    'Why [will/will] they [have moved] (move) to another city by then?'
  ],
  en: {
    title: 'Future Perfect Simple',
    description:
      'To talk about actions that will be completed before a specific time in the future.',
    theory: {
      explanation:
        'The Future Perfect Simple is used to describe actions that will have been completed before a specific point in the future.',
      sentences: {
        affirmative: {
          structure:
            'Subject + will have + Past Participle + (rest of the sentence)',
          examples: [
            'I will have finished my work by tomorrow.',
            'She will have traveled to Spain by next year.',
            'They will have met at the event by then.'
          ]
        },
        negative: {
          structure:
            'Subject + will not (won’t) have + Past Participle + (rest of the sentence)',
          examples: [
            'I will not have finished my work by tomorrow.',
            'She will not have traveled to Spain by next year.',
            'They won’t have met at the event by then.'
          ]
        },
        interrogative: {
          structure:
            'Will + Subject + have + Past Participle + (rest of the sentence) + ?',
          examples: [
            'Will I have finished my work by tomorrow?',
            'Will she have traveled to Spain by next year?',
            'Will they have met at the event by then?'
          ]
        }
      },
      usageNotes:
        'The Future Perfect Simple often uses time expressions like "by tomorrow", "by next year", or "by then". It emphasizes the completion of an action before a certain point in the future.'
    }
  },
  es: {
    title: 'Futuro Perfecto Simple',
    description:
      'Para hablar de acciones que habrán sido completadas antes de un momento específico en el futuro.',
    theory: {
      explanation:
        'El Futuro Perfecto Simple se usa para describir acciones que habrán sido completadas antes de un punto específico en el futuro.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + will have + Participio pasado + (resto de la oración)',
          examples: [
            'I will have finished my work by tomorrow.',
            'She will have traveled to Spain by next year.',
            'They will have met at the event by then.'
          ]
        },
        negative: {
          structure:
            'Sujeto + will not (won’t) have + Participio pasado + (resto de la oración)',
          examples: [
            'I will not have finished my work by tomorrow.',
            'She will not have traveled to Spain by next year.',
            'They won’t have met at the event by then.'
          ]
        },
        interrogative: {
          structure:
            'Will + Sujeto + have + Participio pasado + (resto de la oración) + ?',
          examples: [
            'Will I have finished my work by tomorrow?',
            'Will she have traveled to Spain by next year?',
            'Will they have met at the event by then?'
          ]
        }
      },
      usageNotes:
        'El Future Perfect Simple suele usar expresiones de tiempo como "by tomorrow", "by next year" o "by then". Se utiliza para enfatizar la finalización de una acción antes de un momento determinado en el futuro.'
    }
  }
}
