export interface Theory {
  explanation: string
  sentences: {
    [key: string]: {
      structure: string
      examples: string[]
    }
  }
  usageNotes?: string
}
