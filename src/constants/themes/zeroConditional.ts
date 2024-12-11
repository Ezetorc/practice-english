import { Theme } from '../../models/Theme'

export const zeroConditional: Theme = {
  path: '/zero-conditional',
  exercises: [
    'If you [heat] (heat) water, it [boils] (boil).',
    "Plants [die] (die) if they [don't get] (not get) enough water.",
    'If you [mix] (mix) red and blue, you [get] (get) purple.',
    'The alarm [rings] (ring) if someone [opens] (open) the door.',
    "If you [don't exercise] (not exercise), you [gain] (gain) weight.",
    'Ice [melts] (melt) if you [leave] (leave) it in the sun.',
    'If you [press] (press) this button, the machine [starts] (start).'
  ],
  en: {
    title: 'Zero Conditional',
    description: 'To talk about general truths, facts, and habits.',
    theory: {
      explanation:
        'The Zero Conditional is used to express facts or situations that are always true if a condition is met.',
      sentences: {
        affirmative: {
          structure: 'If + Present Simple, Present Simple',
          examples: [
            'If you heat water, it boils.',
            'If it rains, the ground gets wet.',
            'If you mix red and yellow, you get orange.'
          ]
        },
        negative: {
          structure: 'If + Present Simple, don’t/doesn’t + Verb',
          examples: [
            'If you don’t water plants, they die.',
            'If he doesn’t study, he fails the exam.',
            'If you don’t eat, you get hungry.'
          ]
        },
        interrogative: {
          structure: 'What happens if + Present Simple + ?',
          examples: [
            'What happens if you heat ice?',
            'What happens if it rains?',
            'What happens if you press this button?'
          ]
        }
      },
      usageNotes:
        'Zero Conditional is used for scientific facts, general truths, and cause-effect situations.'
    }
  },
  es: {
    title: 'Condicional Cero',
    description: 'Para hablar de verdades generales, hechos y hábitos.',
    theory: {
      explanation:
        'El Condicional Cero se usa para expresar hechos o situaciones que siempre son ciertas si se cumple una condición.',
      sentences: {
        affirmative: {
          structure: 'If + Presente Simple, Presente Simple',
          examples: [
            'If you heat water, it boils.',
            'If it rains, the ground gets wet.',
            'If you mix red and yellow, you get orange.'
          ]
        },
        negative: {
          structure: 'If + Presente Simple, don’t/doesn’t + Verbo',
          examples: [
            'If you don’t water plants, they die.',
            'If he doesn’t study, he fails the exam.',
            'If you don’t eat, you get hungry.'
          ]
        },
        interrogative: {
          structure: 'What happens if + Presente Simple + ?',
          examples: [
            'What happens if you heat ice?',
            'What happens if it rains?',
            'What happens if you press this button?'
          ]
        }
      },
      usageNotes:
        'Se usa para hechos científicos, verdades generales y situaciones de causa y efecto.'
    }
  }
}
