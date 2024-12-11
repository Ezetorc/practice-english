import { Theme } from "../../models/Theme";

export const presentPerfectContinuous: Theme = {
  path: '/present-perfect-continuous',
  exercises: [
    "I [have been working/'ve been working] (work) all day.",
    "She [has been studying/'s been studying] (study) for hours.",
    "They [have been playing/'ve been playing] (play) video games since morning.",
    "He [has been running/'s been running] (run) in the park.",
    "We [have been traveling/'ve been traveling] (travel) around Europe.",
    "You [have been learning/'ve been learning] (learn) French.",
    "The kids [have been watching/'ve been watching] (watch) TV all afternoon.",
    "She [has been cooking/'s been cooking] (cook) dinner for an hour.",

    "I [haven't been sleeping/have not been sleeping/havent been sleeping] (not sleep) well lately.",
    "He [hasn't been working/has not been working/hasnt been working] (not work) on his project.",
    "They [haven't been exercising/have not been exercising/havent been exercising] (not exercise) this week.",
    "She [hasn't been feeling/has not been feeling/hasnt been feeling] (not feel) well.",
    "We [haven't been meeting/have not been meeting/havent been meeting] (not meet) regularly.",
    "You [haven't been listening/have not been listening/havent been listening] (not listen) to me.",

    '[Have/have] you [been working] (work) all day?',
    '[Has/has] she [been studying] (study) for the exam?',
    '[Have/have] they [been playing] (play) soccer?',
    '[Has/has] he [been running] (run) this morning?',
    '[Have/have] we [been traveling] (travel) together?',
    '[Has/has] it [been raining] (rain) since noon?'
  ],

  en: {
    title: 'Present Perfect Continuous',
    description:
      'To talk about actions that started in the past and are still continuing or have recently stopped, emphasizing the duration.',
    theory: {
      explanation:
        'The Present Perfect Continuous is used for actions that began in the past and continue to the present, or recently stopped, often focusing on the duration.',
      sentences: {
        affirmative: {
          structure:
            'Subject + have/has + been + verb(-ing) + (rest of the sentence)',
          examples: [
            'I have been working all day.',
            'She has been studying for hours.',
            'They have been playing video games.'
          ]
        },
        negative: {
          structure:
            'Subject + have/has + not + been + verb(-ing) + (rest of the sentence)',
          examples: [
            'I have not been sleeping well.',
            'He has not been working on his project.',
            'They have not been exercising.'
          ]
        },
        interrogative: {
          structure:
            'Have/Has + subject + been + verb(-ing) + (rest of the sentence) + ?',
          examples: [
            'Have you been working all day?',
            'Has she been studying for the exam?',
            'Have they been playing soccer?'
          ]
        }
      },
      usageNotes:
        'The Present Perfect Continuous often uses expressions like "for", "since", and "lately".'
    }
  },

  es: {
    title: 'Presente Perfecto Continuo',
    description:
      'Para hablar de acciones que comenzaron en el pasado y continúan en el presente o han terminado recientemente, haciendo énfasis en la duración.',
    theory: {
      explanation:
        'El Presente Perfecto Continuo se usa para acciones que empezaron en el pasado y continúan en el presente o han finalizado recientemente, destacando la duración.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + have/has + been + verbo(-ing) + (resto de la oración)',
          examples: [
            'I have been working all day.',
            'She has been studying for hours.',
            'They have been playing video games.'
          ]
        },
        negative: {
          structure:
            'Sujeto + have/has + not + been + verbo(-ing) + (resto de la oración)',
          examples: [
            'I have not been sleeping well.',
            'He has not been working on his project.',
            'They have not been exercising.'
          ]
        },
        interrogative: {
          structure:
            'Have/Has + sujeto + been + verbo(-ing) + (resto de la oración) + ?',
          examples: [
            'Have you been working all day?',
            'Has she been studying for the exam?',
            'Have they been playing soccer?'
          ]
        }
      },
      usageNotes:
        'El Presente Perfecto Continuo se usa a menudo con expresiones como "desde", "hace" y "últimamente".'
    }
  }
}
