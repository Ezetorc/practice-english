import { create } from 'zustand'
import { LanguageStore } from '../models/LanguageStore'

export const getLanguageStore = create<LanguageStore>((set, get) => ({
  language: 'en',
  getLanguage: () => get().language,
  setLanguage: newLanguage => set({ language: newLanguage })
}))
