import { Exercises } from '../models/Exercises'
import { ThemeId } from '../models/ThemeId'

export const exercises: { [key in ThemeId]: Exercises } = {
  presentSimple: [
    'If Paul [sells] (sell) his house, he [will earn] (earn) a lot of money.',
    "If John [gets] (get) a job, he [won't be/wont be] (be) poor anymore."
  ]
}
