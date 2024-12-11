import { Theme } from '../../models/Theme'

export const pastSimple: Theme = {
  path: '/past-simple',
  exercises: [
    'They [were] (be) in Mexico in 2016.',
    'Melisa [won] (win) the rase two days ago.',
    'Lisa [read] (read) a book last night before she [went] (go) to bed.',
    'When I [lived] (live) in Paris, I often [went] (go) to the coffee store.',
    'The train [left] (leave) at 6 PM yesterday.',
    'She [went] (go) to the supermarket today.',
    'My mother [bought] (buy) a new dress for me.',
    'I [washed] (wash) the dishes.',

    "I [did not eat/didnt eat/didn't eat] (not eat) breakfast today.",
    "I [didn't sleep/didnt sleep/did not sleep] (not sleep) well last night.",
    "Tom [did not work/didn't work/didnt work] (not work) last weekend.",
    "You [did not do/didnt do/didn't do] (not do) a good job today.",
    "We [did not talk/didn't talk/didnt talk] (not talk) last month.",
    "She [did not drive/didn't drive/didnt drive] (not drive) at night.",

    '[did/Did] I [win] (win)?',
    '[did/Did] it [snow] (snow) last night?',
    'What time [did/Did] you [get up] (get up) this morning?',
    '[did/Did] she [speak] (speak) English fluently?',
    '[did/Did] they [go] (go) to the park yesterday?',
    'What time [did/Did] (do) the train [leave] (leave)?'
  ],
  en: {
    title: 'Past Simple',
    description:
      'To talk about actions or events that happened in the past and are now finished.',
    theory: {
      explanation:
        'The Past Simple is used for actions that happened at a specific time in the past and are now completed.',
      sentences: {
        affirmative: {
          structure:
            'Subject + Past Verb (regular verbs: -ed / irregular verbs: past form) + (rest of the sentence)',
          examples: [
            'I lived in London.',
            'She worked at a bank.',
            'They studied English yesterday.'
          ]
        },
        negative: {
          structure: 'Subject + did not + Base Verb + (rest of the sentence)',
          examples: [
            'I did not live in London.',
            'She did not work at a bank.',
            'They did not study English yesterday.'
          ]
        },
        interrogative: {
          structure: 'Did + Subject + Base Verb + (rest of the sentence) + ?',
          examples: [
            'Did you live in London?',
            'Did she work at a bank?',
            'Did they study English yesterday?'
          ]
        }
      },
      usageNotes:
        'The Past Simple often uses time expressions like "yesterday", "last week", "in 2000", or "two days ago".'
    }
  },
  es: {
    title: 'Pasado Simple',
    description:
      'Para hablar de acciones o eventos que ocurrieron en el pasado y que ya han finalizado.',
    theory: {
      explanation:
        'El Pasado Simple se usa para acciones que ocurrieron en un momento específico del pasado y que ya están completadas.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + Verbo en Pasado (verbos regulares: -ed / verbos irregulares: forma de pasado) + (resto de la oración)',
          examples: [
            'I lived in London.',
            'She worked at a bank.',
            'They studied English yesterday.'
          ]
        },
        negative: {
          structure: 'Sujeto + did not + Verbo base + (resto de la oración)',
          examples: [
            'I did not live in London.',
            'She did not work at a bank.',
            'They did not study English yesterday.'
          ]
        },
        interrogative: {
          structure: 'Did + Sujeto + Verbo base + (resto de la oración) + ?',
          examples: [
            'Did you live in London?',
            'Did she work at a bank?',
            'Did they study English yesterday?'
          ]
        }
      },
      usageNotes:
        'El Pasado Simple suele utilizar expresiones de tiempo como "yesterday", "last week", "in 2000" o "two days ago".'
    }
  }
}
