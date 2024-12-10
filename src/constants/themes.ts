import { Theme } from '../models/Theme'
import { presentContinuous } from './themes/presentContinuous'
import { presentPerfectSimple } from './themes/presentPerfectSimple'
import { presentSimple } from './themes/presentSimple'

export const themes: Theme[] = [
  presentSimple,
  presentContinuous,
  presentPerfectSimple
]
