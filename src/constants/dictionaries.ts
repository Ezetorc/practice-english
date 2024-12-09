import { Dictionary } from '../models/Dictionary'
import { Language } from '../models/Language'
import { enDictionary } from './enDictionary'
import { esDictionary } from './esDictionary'

export const dictionaries: { [key in Language]: Dictionary } = {
  en: enDictionary,
  es: esDictionary
}
