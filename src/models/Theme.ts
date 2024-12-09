import { Exercises } from './Exercises'
import { Theory } from './Theory'

export interface Theme {
  title: string
  description: string
  theory: Theory
  exercises: Exercises
}
