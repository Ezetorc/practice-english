import { useState } from 'react'
import { dictionaries } from '../constants/dictionaries'
import { Dictionary } from '../models/Dictionary'
import { LanguageStore } from '../models/LanguageStore'
import { getLanguageStore } from '../stores/getLanguageStore'

export function useLanguage () {
  const languageStore: LanguageStore = getLanguageStore()
  const [isLoseProgressModalOpen, setIsLoseProgressModalOpen] =
    useState<boolean>(false)
  const { getLanguage } = languageStore

  const dictionary: Dictionary = dictionaries[getLanguage()]

  return {
    ...languageStore,
    dictionary,
    isLoseProgressModalOpen,
    setIsLoseProgressModalOpen
  }
}
