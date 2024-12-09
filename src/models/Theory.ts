export interface Theory {
  explanation: string
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
