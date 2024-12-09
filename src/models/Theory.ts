export interface Theory {
  explanation: string
  path: string
  sentences: {
    affirmative: {
      structure: string
      examples: string[]
    }
    negative: {
      structure: string
      examples: string[]
    }
    interrogative: {
      structure: string
      examples: string[]
    }
  }
  usageNotes?: string
}
