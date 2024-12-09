import { Dictionary } from "../models/Dictionary";

export const enDictionary: Dictionary = {
  checkAnswer: 'Check answer',
  exercises: 'Exercises',
  home: 'Home',
  theory: "Theory",
  completed: 'Completed',
  next: 'Next',
  affirmative: "Affirmative",
  negative: "Negative",
  interrogative: "Interrogative",
  structures: 'Structures',
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
    }
  }
}