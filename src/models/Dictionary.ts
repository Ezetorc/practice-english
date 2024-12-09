import { ThemeId } from './ThemeId'
import { Theory } from './Theory'

export interface Dictionary {
  checkAnswer: string
  exercises: string
  completed: string
  theory: string
  home: string
  next: string
  goBackToTheory: string
  affirmative: string
  negative: string
  interrogative: string
  usageNotes: string
  explanation: string
  structures: string
  themes: {
    [key in ThemeId]: {
      title: string
      description: string
      theory: Theory
    }
  }
}
