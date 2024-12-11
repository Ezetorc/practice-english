import { Theme } from '../../models/Theme'

export const futureSimple: Theme = {
  path: '/future-simple',
  exercises: [
    "I [will finish/ll finish/'ll finish] (finish) my homework tomorrow.",
    "She [will leave/ll leave/'ll leave] (leave) soon.",
    "They [will travel/ll travel/'ll travel] (travel) to Japan next year.",
    "We [will see/'ll see/ll see] (see) that movie later.",
    "He [will meet/'ll meet/ll meet] (meet) her at the conference.",
    "The train [will depart/ll depart/'ll depart] (depart) at noon.",
    "I [will write/ll write/'ll write] (write) the report by Friday.",
    "She [will cook/ll cook/'ll cook] (cook) dinner tonight.",

    "I [will not finish/won't finish/wont finish] (not finish) the project on time.",
    "He [will not see/won't see/wont see] (not see) the email until tomorrow.",
    "They [will not leave/won't leave/wont leave] (not leave) before the storm passes.",
    "She [will not hear/won't hear/wont hear] (not hear) the news until later.",
    "We [will not arrive/won't arrive/wont arrive] (not arrive) before the event starts.",
    "You [will not clean/won't clean/wont clean] (not clean) the room before the guests arrive.",

    '[Will/will] he [finish] (finish) his work on time?',
    '[Will/will] they [eat] (eat) dinner later?',
    'What [will/will] she [do] (do) tomorrow?',
    '[Will/will] it [stop] (stop) raining soon?',
    '[Will/will] you [visit] (visit) the museum next week?',
    'Why [will/will] they [move] (move) to another city?'
  ],
  en: {
    title: 'Future Simple',
    description:
      'To talk about actions or events that will happen in the future.',
    theory: {
      explanation:
        'The Future Simple is used to describe actions or events that will occur in the future.',
      sentences: {
        affirmative: {
          structure:
            'Subject + will + Base Form of the Verb + (rest of the sentence)',
          examples: [
            'I will finish my work.',
            'She will travel to Spain.',
            'They will meet at the event.'
          ]
        },
        negative: {
          structure:
            'Subject + will not + Base Form of the Verb + (rest of the sentence)',
          examples: [
            'I will not finish my work.',
            'She will not travel to Spain.',
            'They will not meet at the event.'
          ]
        },
        interrogative: {
          structure:
            'Will + Subject + Base Form of the Verb + (rest of the sentence) + ?',
          examples: [
            'Will I finish my work?',
            'Will she travel to Spain?',
            'Will they meet at the event?'
          ]
        }
      },
      usageNotes:
        'The Future Simple often uses time expressions like "tomorrow", "next week", "soon", or "later".'
    }
  },
  es: {
    title: 'Futuro Simple',
    description:
      'Para hablar de acciones o eventos que ocurrirán en el futuro.',
    theory: {
      explanation:
        'El Futuro Simple se usa para describir acciones o eventos que ocurrirán en el futuro.',
      sentences: {
        affirmative: {
          structure:
            'Sujeto + will + Verbo en forma base + (resto de la oración)',
          examples: [
            'I will finish my work.',
            'She will travel to Spain.',
            'They will meet at the event.'
          ]
        },
        negative: {
          structure:
            'Sujeto + will not + Verbo en forma base + (resto de la oración)',
          examples: [
            'I will not finish my work.',
            'She will not travel to Spain.',
            'They will not meet at the event.'
          ]
        },
        interrogative: {
          structure:
            'Will + Sujeto + Verbo en forma base + (resto de la oración) + ?',
          examples: [
            'Will I finish my work?',
            'Will she travel to Spain?',
            'Will they meet at the event?'
          ]
        }
      },
      usageNotes:
        'El Futuro Simple suele utilizar expresiones de tiempo como "tomorrow", "next week", "soon", o "later".'
    }
  }
}
