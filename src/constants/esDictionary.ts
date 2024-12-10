import { Dictionary } from '../models/Dictionary'

export const esDictionary: Dictionary = {
  checkAnswer: 'Comprobar respuesta',
  exercises: 'Ejercicios',
  home: 'Inicio',
  theory: 'Teoría',
  completed: 'Completado',
  next: 'Siguiente',
  languages: 'Idiomas',
  verbsList: 'Lista de verbos',
  affirmative: 'Afirmativa',
  negative: 'Negativa',
  infinite: 'Infinitivo',
  pastParticiple: 'Pasado Participio',
  pastSimple: 'Pasado Simple',
  interrogative: 'Interrogativa',
  improve: 'Mejorá',
  practice: 'Practicá',
  yourEnglish: 'Tu Inglés',
  boost: 'Superá',
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
    },
    presentContinuous: {
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
    },
    presentPerfectSimple: {
      title: 'Presente Perfecto Simple',
      description:
        'Para hablar de acciones que ocurrieron en un momento no específico del pasado y tienen conexión con el presente.',
      theory: {
        explanation:
          'El Presente Perfecto Simple se usa para acciones que empezaron en el pasado y continúan en el presente o tienen resultados en el presente.',
        sentences: {
          affirmative: {
            structure:
              'Sujeto + have/has + Verbo en pasado participio + (resto de la oración)',
            examples: [
              'I have finished my homework.',
              'She has traveled to Spain.',
              'They have seen that movie.'
            ]
          },
          negative: {
            structure:
              'Sujeto + have/has + not + Verbo en pasado participio + (resto de la oración)',
            examples: [
              'I have not finished my homework.',
              'She has not traveled to Spain.',
              'They have not seen that movie.'
            ]
          },
          interrogative: {
            structure:
              'Have/Has + Sujeto + Verbo en pasado participio + (resto de la oración) + ?',
            examples: [
              'Have you finished your homework?',
              'Has she traveled to Spain?',
              'Have they seen that movie?'
            ]
          }
        },
        usageNotes:
          'El Presente Perfecto Simple se usa a menudo con palabras como "ya", "todavía", "nunca" y "alguna vez".'
      }
    }
  }
}
