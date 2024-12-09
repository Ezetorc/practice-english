import { Theme } from '../models/Theme'

export const themes: Theme[] = [
  {
    title: 'Present Simple',
    description:
      'To talk about things that happen regularly, facts, general truths, or things that are always true.',
    theory: {
      path: '/present-simple/theory',
      explanation:
        'The Present Simple is used for actions that are habitual, general truths, or things that are always true.',
      sentences: {
        affirmative: {
          structure:
            'Subject + Base Verb (in the infinitive form) + (rest of the sentence)',
          examples: [
            'I play football every weekend.',
            'She works at a bank.',
            'They study English every day.'
          ]
        },
        negative: {
          structure:
            'Subject + do/does + not + Base Verb + (rest of the sentence)',
          examples: [
            'I do not play football every weekend.',
            'She does not work at a bank.',
            'They do not study English every day.'
          ]
        },
        interrogative: {
          structure:
            'Do/Does + Subject + Base Verb + (rest of the sentence) + ?',
          examples: [
            'Do you play football every weekend?',
            'Does she work at a bank?',
            'Do they study English every day?'
          ]
        }
      },
      usageNotes:
        'The Present Simple is often used with adverbs of frequency like "always", "usually", "never".'
    },
    exercises: {
      path: '/present-simple/exercises',
      exercises: [
        'If Paul [sells] (sell) his house, he [will earn] (earn) a lot of money.',
        "If John [gets] (get) a job, he [won't be] (be) poor anymore."
      ]
    }
  }

  // {
  //   title: 'Present Continuous',
  //   description:
  //     'To talk about actions happening at the moment of speaking or temporary situations.',
  //   path: '/present-continuous',
  //   theory: {
  //     explanation:
  //       'The Present Continuous is used for actions happening right now or for temporary situations.',
  //     examples: {
  //       affirmative: [
  //         'I am studying English right now.',
  //         'She is working at the moment.',
  //         'They are playing football at the park.'
  //       ],
  //       negative: [
  //         'I am not studying English right now.',
  //         'She is not working at the moment.',
  //         'They are not playing football at the park.'
  //       ],
  //       interrogative: [
  //         'Are you studying English right now?',
  //         'Is she working at the moment?',
  //         'Are they playing football at the park?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Present Continuous is also used for plans or arrangements in the near future.'
  //   }
  // },
  // {
  //   title: 'Present Perfect Simple',
  //   description:
  //     'To talk about actions that happened at an unspecified time and are relevant to the present.',
  //   path: '/present-perfect-simple',
  //   theory: {
  //     explanation:
  //       'The Present Perfect Simple is used for actions that happened at an unspecified time and have an effect on the present.',
  //     examples: {
  //       affirmative: [
  //         'I have visited Paris.',
  //         'She has studied English for three years.',
  //         'They have seen that movie.'
  //       ],
  //       negative: [
  //         'I have not visited Paris.',
  //         'She has not studied English for three years.',
  //         'They have not seen that movie.'
  //       ],
  //       interrogative: [
  //         'Have you visited Paris?',
  //         'Has she studied English for three years?',
  //         'Have they seen that movie?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Present Perfect is often used with "ever", "never", "yet", and "already".'
  //   }
  // },
  // {
  //   title: 'Present Perfect Continuous',
  //   description:
  //     'To talk about actions that started in the past and continue in the present or have recently finished.',
  //   path: '/present-perfect-continuous',
  //   theory: {
  //     explanation:
  //       'The Present Perfect Continuous emphasizes the duration of an action that began in the past and continues to the present or has recently finished.',
  //     examples: {
  //       affirmative: [
  //         'I have been studying English for two hours.',
  //         'She has been working here since 2015.',
  //         'They have been playing football all afternoon.'
  //       ],
  //       negative: [
  //         'I have not been studying English for two hours.',
  //         'She has not been working here since 2015.',
  //         'They have not been playing football all afternoon.'
  //       ],
  //       interrogative: [
  //         'Have you been studying English for two hours?',
  //         'Has she been working here since 2015?',
  //         'Have they been playing football all afternoon?'
  //       ]
  //     },
  //     usageNotes:
  //       'This tense is often used with time expressions like "for", "since", "all day".'
  //   }
  // },
  // {
  //   title: 'Past Simple',
  //   description:
  //     'To talk about actions that happened at a specific time in the past.',
  //   path: '/past-simple',
  //   theory: {
  //     explanation:
  //       'The Past Simple is used for actions that were completed at a specific time in the past.',
  //     examples: {
  //       affirmative: [
  //         'I visited Paris last year.',
  //         'She studied English yesterday.',
  //         'They watched a movie last night.'
  //       ],
  //       negative: [
  //         'I did not visit Paris last year.',
  //         'She did not study English yesterday.',
  //         'They did not watch a movie last night.'
  //       ],
  //       interrogative: [
  //         'Did you visit Paris last year?',
  //         'Did she study English yesterday?',
  //         'Did they watch a movie last night?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Past Simple is often used with time expressions like "yesterday", "last year", or specific times.'
  //   }
  // },
  // {
  //   title: 'Past Continuous',
  //   description:
  //     'To describe actions that were happening at a particular moment in the past.',
  //   path: '/past-continuous',
  //   theory: {
  //     explanation:
  //       'The Past Continuous is used for actions that were ongoing at a specific time in the past.',
  //     examples: {
  //       affirmative: [
  //         'I was studying when you called.',
  //         'She was working at 9 PM last night.',
  //         'They were playing football all afternoon.'
  //       ],
  //       negative: [
  //         'I was not studying when you called.',
  //         'She was not working at 9 PM last night.',
  //         'They were not playing football all afternoon.'
  //       ],
  //       interrogative: [
  //         'Were you studying when I called?',
  //         'Was she working at 9 PM last night?',
  //         'Were they playing football all afternoon?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Past Continuous often shows an action interrupted by another action (Past Simple).'
  //   }
  // },
  // {
  //   title: 'Past Perfect Simple',
  //   description:
  //     'To talk about an action that happened before another action in the past.',
  //   path: '/past-perfect-simple',
  //   theory: {
  //     explanation:
  //       'The Past Perfect Simple is used for actions that were completed before another action in the past.',
  //     examples: {
  //       affirmative: [
  //         'I had visited Paris before I moved to London.',
  //         'She had studied English before she went to France.',
  //         'They had watched the movie before we arrived.'
  //       ],
  //       negative: [
  //         'I had not visited Paris before I moved to London.',
  //         'She had not studied English before she went to France.',
  //         'They had not watched the movie before we arrived.'
  //       ],
  //       interrogative: [
  //         'Had you visited Paris before you moved to London?',
  //         'Had she studied English before she went to France?',
  //         'Had they watched the movie before we arrived?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Past Perfect is often used with time expressions like "before", "already", and "by the time".'
  //   }
  // },
  // {
  //   title: 'Past Perfect Continuous',
  //   description:
  //     'To talk about actions that were ongoing before another action in the past.',
  //   path: '/past-perfect-continuous',
  //   theory: {
  //     explanation:
  //       'The Past Perfect Continuous is used to emphasize the duration of an action that was ongoing before another action in the past.',
  //     examples: {
  //       affirmative: [
  //         'I had been studying for two hours before you arrived.',
  //         'She had been working at the company for five years before she left.',
  //         'They had been playing football all afternoon before it started raining.'
  //       ],
  //       negative: [
  //         'I had not been studying for two hours before you arrived.',
  //         'She had not been working at the company for five years before she left.',
  //         'They had not been playing football all afternoon before it started raining.'
  //       ],
  //       interrogative: [
  //         'Had you been studying for two hours before I arrived?',
  //         'Had she been working at the company for five years before she left?',
  //         'Had they been playing football all afternoon before it started raining?'
  //       ]
  //     },
  //     usageNotes:
  //       'This tense is often used when you want to emphasize the duration of an action in the past.'
  //   }
  // },
  // {
  //   title: 'Future Simple',
  //   description: 'To talk about actions that will happen in the future.',
  //   path: '/future-simple',
  //   theory: {
  //     explanation:
  //       'The Future Simple is used to talk about actions that will happen in the future.',
  //     examples: {
  //       affirmative: [
  //         'I will visit Paris next year.',
  //         'She will study English tomorrow.',
  //         'They will play football on Saturday.'
  //       ],
  //       negative: [
  //         'I will not visit Paris next year.',
  //         'She will not study English tomorrow.',
  //         'They will not play football on Saturday.'
  //       ],
  //       interrogative: [
  //         'Will you visit Paris next year?',
  //         'Will she study English tomorrow?',
  //         'Will they play football on Saturday?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Future Simple is often used for predictions, promises, or offers.'
  //   }
  // },
  // {
  //   title: 'Future Continuous',
  //   description:
  //     'To talk about actions that will be happening at a specific time in the future.',
  //   path: '/future-continuous',
  //   theory: {
  //     explanation:
  //       'The Future Continuous is used for actions that will be ongoing at a specific time in the future.',
  //     examples: {
  //       affirmative: [
  //         'I will be studying at 8 PM tonight.',
  //         'She will be working at 9 AM tomorrow.',
  //         'They will be playing football next Sunday.'
  //       ],
  //       negative: [
  //         'I will not be studying at 8 PM tonight.',
  //         'She will not be working at 9 AM tomorrow.',
  //         'They will not be playing football next Sunday.'
  //       ],
  //       interrogative: [
  //         'Will you be studying at 8 PM tonight?',
  //         'Will she be working at 9 AM tomorrow?',
  //         'Will they be playing football next Sunday?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Future Continuous is often used for planned actions or actions that will be interrupted.'
  //   }
  // },
  // {
  //   title: 'Future Perfect Simple',
  //   description:
  //     'To talk about actions that will be completed before a certain time in the future.',
  //   path: '/future-perfect-simple',
  //   theory: {
  //     explanation:
  //       'The Future Perfect Simple is used to talk about actions that will be completed before a certain time in the future.',
  //     examples: {
  //       affirmative: [
  //         'I will have visited Paris by next year.',
  //         'She will have studied English by 2025.',
  //         'They will have watched the movie by tomorrow.'
  //       ],
  //       negative: [
  //         'I will not have visited Paris by next year.',
  //         'She will not have studied English by 2025.',
  //         'They will not have watched the movie by tomorrow.'
  //       ],
  //       interrogative: [
  //         'Will you have visited Paris by next year?',
  //         'Will she have studied English by 2025?',
  //         'Will they have watched the movie by tomorrow?'
  //       ]
  //     },
  //     usageNotes:
  //       'The Future Perfect Simple is often used with time expressions like "by", "by the time".'
  //   }
  // },
  // {
  //   title: 'Future Perfect Continuous',
  //   description:
  //     'To talk about actions that will have been ongoing up to a point in the future.',
  //   path: '/future-perfect-continuous',
  //   theory: {
  //     explanation:
  //       'The Future Perfect Continuous is used to talk about actions that will have been ongoing until a certain point in the future.',
  //     examples: {
  //       affirmative: [
  //         'I will have been studying for two hours by the time you arrive.',
  //         'She will have been working for five years by next month.',
  //         'They will have been playing football for an hour by 6 PM.'
  //       ],
  //       negative: [
  //         'I will not have been studying for two hours by the time you arrive.',
  //         'She will not have been working for five years by next month.',
  //         'They will not have been playing football for an hour by 6 PM.'
  //       ],
  //       interrogative: [
  //         'Will you have been studying for two hours by the time I arrive?',
  //         'Will she have been working for five years by next month?',
  //         'Will they have been playing football for an hour by 6 PM?'
  //       ]
  //     },
  //     usageNotes:
  //       'This tense is used to emphasize the duration of an action that will continue until a future point.'
  //   }
  // },
  // {
  //   title: 'Conditionals',
  //   description:
  //     'To talk about possible or imaginary situations, and their consequences.',
  //   path: '/conditionals',
  //   theory: {
  //     explanation:
  //       'Conditionals are used to talk about possible or imaginary situations and their results. There are several types of conditionals (zero, first, second, third).',
  //     examples: {
  //       affirmative: [
  //         'If it rains, I will stay at home.',
  //         'If I had a car, I would drive to work.',
  //         'If I had studied harder, I would have passed the test.'
  //       ],
  //       negative: [
  //         'If it does not rain, I will go out.',
  //         'If I did not have a car, I would take the bus.',
  //         'If I had not studied harder, I would not have passed the test.'
  //       ],
  //       interrogative: [
  //         'What will you do if it rains?',
  //         'What would you do if you had a car?',
  //         'What would you have done if you had studied harder?'
  //       ]
  //     },
  //     usageNotes:
  //       'Conditionals are often used to express hypothetical situations or future possibilities.'
  //   }
  // },
  // {
  //   title: 'Reported Speech',
  //   description:
  //     'To report what someone else has said without quoting them directly.',
  //   path: '/reported-speech',
  //   theory: {
  //     explanation:
  //       'Reported Speech is used to report what someone else has said without quoting them directly. The tense usually shifts back when reporting speech.',
  //     examples: {
  //       affirmative: [
  //         'He said that he was going to the store.',
  //         'She told me that she had finished her homework.',
  //         'They explained that they would arrive soon.'
  //       ],
  //       negative: [
  //         'He did not say that he was going to the store.',
  //         'She did not tell me that she had finished her homework.',
  //         'They did not explain that they would arrive soon.'
  //       ],
  //       interrogative: [
  //         'Did he say that he was going to the store?',
  //         'Did she tell you that she had finished her homework?',
  //         'Did they explain that they would arrive soon?'
  //       ]
  //     },
  //     usageNotes:
  //       'In reported speech, you often need to change the pronouns and the tense of the original statement.'
  //   }
  // },
  // {
  //   title: 'Relative Clauses',
  //   description: 'To provide more information about a noun in the sentence.',
  //   path: '/relative-clauses',
  //   theory: {
  //     explanation:
  //       'Relative clauses are used to give more information about a noun in the sentence. They can be defining or non-defining.',
  //     examples: {
  //       affirmative: [
  //         'The man who is sitting over there is my brother.',
  //         'I have a friend who lives in Canada.',
  //         'The book that I bought yesterday is great.'
  //       ],
  //       negative: [
  //         'The man who is not sitting over there is my brother.',
  //         'I do not have a friend who lives in Canada.',
  //         'The book that I did not buy yesterday is great.'
  //       ],
  //       interrogative: [
  //         'Who is the man who is sitting over there?',
  //         'Do you have a friend who lives in Canada?',
  //         'Is the book that you bought yesterday great?'
  //       ]
  //     },
  //     usageNotes:
  //       'Relative clauses can be restrictive (defining) or non-restrictive (non-defining).'
  //   }
  // },
  // {
  //   title: 'Used to',
  //   description: 'To talk about past habits or states that are no longer true.',
  //   path: '/used-to',
  //   theory: {
  //     explanation:
  //       'The phrase "used to" is used to talk about past habits or states that are no longer true.',
  //     examples: {
  //       affirmative: [
  //         'I used to live in New York.',
  //         'She used to go jogging every morning.',
  //         'They used to eat out a lot.'
  //       ],
  //       negative: [
  //         'I did not use to live in New York.',
  //         'She did not use to go jogging every morning.',
  //         'They did not use to eat out a lot.'
  //       ],
  //       interrogative: [
  //         'Did you use to live in New York?',
  //         'Did she use to go jogging every morning?',
  //         'Did they use to eat out a lot?'
  //       ]
  //     },
  //     usageNotes:
  //       'Use "used to" for past habits or states, not actions that happened at a specific time in the past.'
  //   }
  // }
]
