import { Theme } from '../../models/Theme'

export const beGoingTo: Theme = {
  path: '/be-going-to',
  exercises: [
    "I [am going to finish/m going to finish/'m going to finish/am gonna finish/'m gonna finish/m gonna finish] (finish) my homework tomorrow.",
    "She [is going to leave/'s going to leave/is gonna leave/'s gonna leave] (leave) soon.",
    "They [are going to travel/re going to travel/'re going to travel/are gonna travel/re gonna travel/'re gonna travel] (travel) to Japan next year.",
    "We [are going to see/re going to see/'re going to see/are gonna see/re gonna see/'re gonna see] (see) that movie later.",
    "He [is going to meet/'s going to meet/is gonna meet/'s gonna meet] (meet) her at the conference.",
    "The train [is going to depart/'s going to depart/is gonna depart/'s gonna depart] (depart) at noon.",
    "I [am going to write/m going to write/'m going to write/am gonna write/m gonna write/'m gonna write] (write) the report by Friday.",
    "She [is going to cook/'s going to cook/is gonna cook/'s gonna cook] (cook) dinner tonight.",

    "I [am not going to finish/m not going to finish/'m not going to finish/am not gonna finish/m not gonna finish/'m not gonna finish] (not finish) the project on time.",
    "He [is not going to see/'s not going to see/is not gonna see/'s not gonna see] (not see) the email until tomorrow.",
    "They [are not going to leave/re not going to leave/'re not going to leave/are not gonna leave/re not gonna leave/'re not gonna leave] (not leave) before the storm passes.",
    "She [is not going to hear/'s not going to hear/is not gonna hear/'s not gonna hear] (not hear) the news until later.",
    "We [are not going to arrive/re not going to arrive/'re not going to arrive/are not gonna arrive/re not gonna arrive/'re not gonna arrive] (not arrive) before the event starts.",
    "You [are not going to clean/re not going to clean/'re not going to clean/are not gonna clean/re not gonna clean/'re not gonna clean] (not clean) the room before the guests arrive.",

    '[Am/am] I [going to finish/gonna finish] (finish) my work on time?',
    '[Is/is] he [going to leave/gonna leave] (leave) soon?',
    '[Are/are] they [going to eat/gonna eat] (eat) dinner later?',
    'What [is/is] she [going to do/gonna do] (do) tomorrow?',
    '[Is/is] it [going to stop/gonna stop] (stop) raining soon?',
    '[Are/are] you [going to visit/gonna visit] (visit) the museum next week?',
    'Why [are/are] they [going to move/gonna move] (move) to another city?'
  ],
  en: {
    title: 'Be Going To',
    description:
      'To talk about planned actions or events, or to make predictions based on evidence.',
    theory: {
      explanation:
        'The structure "be going to" is used to describe plans or intentions decided before speaking, or to predict something based on current evidence.',
      sentences: {
        affirmative: {
          structure:
            'Subject + am/is/are + going to + Base Form of the Verb + (rest of the sentence)',
          examples: [
            'I am going to finish my work.',
            'She is going to travel to Spain.',
            'They are going to meet at the event.'
          ]
        },
        negative: {
          structure:
            'Subject + am/is/are + not + going to + Base Form of the Verb + (rest of the sentence)',
          examples: [
            'I am not going to finish my work.',
            'She is not going to travel to Spain.',
            'They are not going to meet at the event.'
          ]
        },
        interrogative: {
          structure:
            'Am/Is/Are + Subject + going to + Base Form of the Verb + (rest of the sentence) + ?',
          examples: [
            'Am I going to finish my work?',
            'Is she going to travel to Spain?',
            'Are they going to meet at the event?'
          ]
        }
      },
      usageNotes:
        'The structure "be going to" often uses time expressions like "tomorrow", "next week", or "later". It is commonly used when a plan is already decided or when there is evidence that something will happen.'
    }
  },
  es: {
    title: 'Be Going To',
    description:
      'Para hablar de planes, intenciones o predicciones basadas en evidencia actual.',
    theory: {
      explanation:
        'La estructura "be going to" se usa para describir planes o intenciones decididas con antelación o para hacer predicciones basadas en evidencia actual.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + am/is/are + going to + Verbo en forma base + (resto de la oración)',
          examples: [
            'I am going to finish my work.',
            'She is going to travel to Spain.',
            'They are going to meet at the event.'
          ]
        },
        negative: {
          structure:
            'Sujeto + am/is/are + not + going to + Verbo en forma base + (resto de la oración)',
          examples: [
            'I am not going to finish my work.',
            'She is not going to travel to Spain.',
            'They are not going to meet at the event.'
          ]
        },
        interrogative: {
          structure:
            'Am/Is/Are + Sujeto + going to + Verbo en forma base + (resto de la oración) + ?',
          examples: [
            'Am I going to finish my work?',
            'Is she going to travel to Spain?',
            'Are they going to meet at the event?'
          ]
        }
      },
      usageNotes:
        'La estructura "be going to" suele usar expresiones de tiempo como "tomorrow", "next week" o "later". Se utiliza cuando el plan ya está decidido o hay evidencia de que algo ocurrirá.'
    }
  }
}
