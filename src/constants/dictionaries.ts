import { Dictionary } from '../models/Dictionary'
import { Language } from '../models/Language'

export const dictionaries: { [key in Language]: Dictionary } = {
  en: {
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
    goBackToTheory: 'Go back to theory (Lose progress)'
  },
  es: {
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
    goBackToTheory: 'Volver a la teoría (Pierde el progreso)'
  }
}
