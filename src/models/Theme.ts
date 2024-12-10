import { Exercises } from './Exercises'
import { Theory } from './Theory'

interface ThemeTexts {
  title: string
  description: string
  theory: Theory
}

export interface Theme {
  path: string
  exercises: Exercises
  es: ThemeTexts
  en: ThemeTexts
}
