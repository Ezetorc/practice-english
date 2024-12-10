import { Dictionary } from '../models/Dictionary'

export const enDictionary: Dictionary = {
  checkAnswer: 'Check answer',
  exercises: 'Exercises',
  home: 'Home',
  theory: 'Theory',
  completed: 'Completed',
  next: 'Next',
  languages: 'Languages',
  affirmative: 'Affirmative',
  negative: 'Negative',
  interrogative: 'Interrogative',
  structures: 'Structures',
  improve: 'Improve',
  infinite: 'Infinitive',
  pastParticiple: 'Past Participle',
  pastSimple: 'Past Simple',
  practice: 'Practice',
  boost: 'Boost',
  verbsList: 'Verbs list',
  yourEnglish: 'Your English',
  explanation: 'Explanation',
  usageNotes: 'Usage notes',
  goBackToTheory: 'Go back to theory (Lose progress)',
  themes: {
    presentSimple: {
      title: 'Present Simple',
      description:
        'To talk about things that happen regularly, facts, general truths, or things that are always true.',
      theory: {
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
      }
    },
    presentContinuous: {
      title: 'Present Continuous',
      description:
        'To talk about things happening now or temporary situations.',
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
    }
  }
}
