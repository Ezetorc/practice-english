import { exercises } from '../constants/exercises'
import { Theme } from '../models/Theme'

export function isLastExercise (index: number, theme: Theme) {
  return index + 1 >= exercises[theme.id].length
}
