import { Theme } from '../../models/Theme'

export const relativeClauses: Theme = {
  path: '/relative-clauses',
  exercises: [
    'The book [that] (which) you lent me is amazing.',
    'She is the person [who] (that) helped me.',
    'This is the house [where] (in which) I grew up.',
    'He’s the man [whose] (of whom) car was stolen.',
    'That’s the reason [why] (that) I’m late.'
  ],
  en: {
    title: 'Relative Clauses',
    description: 'To give more information about a noun.',
    theory: {
      explanation:
        'Relative Clauses provide extra information about a noun using relative pronouns such as who, which, that, where, and whose.',
      sentences: {
        defining: {
          structure: 'Noun + Relative Clause',
          examples: [
            'This is the car that I bought.',
            'She’s the teacher who helped me.'
          ]
        },
        nonDefining: {
          structure: 'Noun + , + Relative Clause + ,',
          examples: [
            'My brother, who lives in Spain, is visiting us.',
            'The book, which you recommended, was great.'
          ]
        }
      },
      usageNotes:
        'Use defining clauses for essential information and non-defining clauses for additional details.'
    }
  },
  es: {
    title: 'Relative Clauses',
    description: 'Para dar más información sobre un sustantivo.',
    theory: {
      explanation:
        'Las Oraciones Relativas proporcionan información adicional sobre un sustantivo usando pronombres relativos como who, which, that, where y whose.',
      sentences: {
        defining: {
          structure: 'Sustantivo + Oración Relativa',
          examples: [
            'This is the car that I bought.',
            'She’s the teacher who helped me.'
          ]
        },
        nonDefining: {
          structure: 'Sustantivo + , + Oración Relativa + ,',
          examples: [
            'My brother, who lives in Spain, is visiting us.',
            'The book, which you recommended, was great.'
          ]
        }
      },
      usageNotes:
        'Usa oraciones relativas definitorias para información esencial y no definitorias para detalles adicionales.'
    }
  }
}
