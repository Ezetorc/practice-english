import { Theme } from "../../models/Theme";

export const presentContinuous: Theme = {
  path: '/present-continuous',
  exercises: [
    "I [am doing/'m doing/m doing] (do) my homework now.",
    "He [is cooking/'s cooking/s cooking] (cook) at the moment.",
    "She [is having/'s having/s having] (have) dinner.",
    "You [are studying/'re studying/re studying] (study) for the exam.",
    "It [is raining/'s raining/s raining] (rain) outside.",
    "They [are swimming/'re swimming/re swimming] (swim) in the pool.",
    "We [are watching/'re watching/re watching] (watch) a movie.",
    "I [am reading/'m reading/m reading] (read) a book.",

    "They [aren't playing/arent playing/are not playing] (not play) football right now.",
    "She [isn't listening/is not listening/isnt listening] (not listen) to music.",
    "He [isn't driving/is not driving/isnt driving] (not drive) today.",
    "I [am not cleaning/'m not cleaning] (not clean) my room.",
    "We [aren't working/are not working/arent working] (not work) this afternoon.",
    "You [aren't dancing/are not dancing/arent dancing] (not dance) at the party.",

    '[Are/are] we [looking] (look) out the window?',
    '[Is/is] she [painting] (paint) a picture?',
    '[Are/are] they [talking] (talk) on the phone?',
    '[Am/am] I [writing] (write) a letter?',
    '[Is/is] he [running] (run) in the park?',
    '[Are/are] you [studying] (study) for the exam?'
  ],
  en: {
    title: 'Present Continuous',
    description: 'To talk about things happening now or temporary situations.',
    theory: {
      explanation:
        'The Present Continuous is used for actions happening right now or temporary situations.',
      sentences: {
        affirmative: {
          structure:
            'Subject + am/are/is + Verb with -ing + (rest of the sentence)',
          examples: [
            'I am playing football right now.',
            'She is working at the moment.',
            'They are studying English this week.'
          ]
        },
        negative: {
          structure:
            'Subject + am/are/is + not + Verb with -ing + (rest of the sentence)',
          examples: [
            'I am not playing football right now.',
            'She is not working at the moment.',
            'They are not studying English this week.'
          ]
        },
        interrogative: {
          structure:
            'Am/Are/Is + Subject + Verb with -ing + (rest of the sentence) + ?',
          examples: [
            'Am I playing football right now?',
            'Is she working at the moment?',
            'Are they studying English this week?'
          ]
        }
      },
      usageNotes:
        'The Present Continuous often uses time words like "now", "at the moment", or "today".'
    }
  },
  es: {
    title: 'Presente Continuo',
    description:
      'Para hablar de acciones que están ocurriendo en el momento actual o situaciones temporales.',
    theory: {
      explanation:
        'El Presente Continuo se usa para describir acciones que están sucediendo en este momento, situaciones temporales o acciones en progreso.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + am/are/is + Verbo con -ing + (resto de la oración)',
          examples: [
            'I am playing football right now.',
            'She is working at the moment.',
            'They are studying English this week.'
          ]
        },
        negative: {
          structure:
            'Sujeto + am/are/is + not + Verbo con -ing + (resto de la oración)',
          examples: [
            'I am not playing football right now.',
            'She is not working at the moment.',
            'They are not studying English this week.'
          ]
        },
        interrogative: {
          structure:
            'Am/Are/Is + Sujeto + Verbo con -ing + (resto de la oración) + ?',
          examples: [
            'Am I playing football right now?',
            'Is she working at the moment?',
            'Are they studying English this week?'
          ]
        }
      },
      usageNotes:
        'El Presente Continuo se usa a menudo con expresiones de tiempo como "right now", "at the moment", "currently", o "this week".'
    }
  }
}
