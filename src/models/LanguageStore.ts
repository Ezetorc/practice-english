import { Language } from "./Language"

export interface LanguageStore {
  language: Language
  setLanguage: (newLanguage: Language) => void
  getLanguage: () => Language
}