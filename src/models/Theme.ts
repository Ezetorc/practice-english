import { ThemeId } from './ThemeId'

export interface Theme {
  id: ThemeId
  paths: {
    theory: string
    exercises: string
    completed: string
  }
}
