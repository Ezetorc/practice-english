import { Dictionary } from '../models/Dictionary'

export const esDictionary: Dictionary = {
  checkAnswer: 'Comprobar respuesta',
  exercises: 'Ejercicios',
  home: 'Inicio',
  theory: "Teoría",
  completed: 'Completado',
  next: 'Siguiente',
  affirmative: "Afirmativa",
  negative: "Negativa",
  interrogative: "Interrogativa",
  structures: 'Estructuras',
  explanation: 'Explicación',
  usageNotes: 'Notas de uso',
  goBackToTheory: 'Volver a la teoría (Pierde el progreso)',
  themes: {
    presentSimple: {
      title: 'Presente Simple',
      description:
        'Para hablar de cosas que suceden regularmente, hechos, verdades generales o cosas que siempre son ciertas.',
      theory: {
        explanation:
          'El Presente Simple se usa para acciones que son habituales, verdades generales o cosas que siempre son ciertas.',
        sentences: {
          affirmative: {
            structure:
              'Sujeto + Verbo base (en su forma infinitiva) + (resto de la oración)',
            examples: [
              'I play football every weekend.',
              'She works at a bank.',
              'They study English every day.'
            ]
          },
          negative: {
            structure:
              'Sujeto + do/does + not + Verbo base + (resto de la oración)',
            examples: [
              'I do not play football every weekend.',
              'She does not work at a bank.',
              'They do not study English every day.'
            ]
          },
          interrogative: {
            structure:
              'Do/Does + Sujeto + Verbo base + (resto de la oración) + ?',
            examples: [
              'Do you play football every weekend?',
              'Does she work at a bank?',
              'Do they study English every day?'
            ]
          }
        },
        usageNotes:
          'El Presente Simple se usa a menudo con adverbios de frecuencia como "always", "usually", "never".'
      }
    }
  }
}
