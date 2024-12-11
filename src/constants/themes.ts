import { Theme } from '../models/Theme'
import { beGoingTo } from './themes/beGoingTo'
import { firstConditional } from './themes/firstConditional'
import { futureContinuous } from './themes/futureContinuous'
import { futurePerfectContinuous } from './themes/futurePerfectContinuous'
import { futurePerfectSimple } from './themes/futurePerfectSimple'
import { futureSimple } from './themes/futureSimple'
import { pastContinuous } from './themes/pastContinuous'
import { pastPerfectContinuous } from './themes/pastPerfectContinuous'
import { pastPerfectSimple } from './themes/pastPerfectSimple'
import { pastSimple } from './themes/pastSimple'
import { presentContinuous } from './themes/presentContinuous'
import { presentPerfectContinuous } from './themes/presentPerfectContinuous'
import { presentPerfectSimple } from './themes/presentPerfectSimple'
import { presentSimple } from './themes/presentSimple'
import { relativeClauses } from './themes/relativeClauses'
import { reportedSpeech } from './themes/reportedSpeech'
import { secondConditional } from './themes/secondConditional'
import { thirdConditional } from './themes/thirdConditional'
import { usedTo } from './themes/usedTo'
import { zeroConditional } from './themes/zeroConditional'

export const themes: Theme[] = [
  presentSimple,
  presentContinuous,
  presentPerfectSimple,
  presentPerfectContinuous,
  pastSimple,
  pastContinuous,
  pastPerfectSimple,
  pastPerfectContinuous,
  futureSimple,
  beGoingTo,
  futureContinuous,
  futurePerfectSimple,
  futurePerfectContinuous,
  zeroConditional,
  firstConditional,
  secondConditional,
  thirdConditional,
  reportedSpeech,
  relativeClauses,
  usedTo
]
