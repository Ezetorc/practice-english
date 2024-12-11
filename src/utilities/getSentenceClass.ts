import { SentenceType } from '../models/SentenceType'

export function getSentenceClass (type: SentenceType): string {
  if (type === 'affirmative') return 'text-affirmative'
  if (type === 'negative') return 'text-negative'
  if (type === 'interrogative') return 'text-interrogative'
  if (type === 'defining') return 'text-affirmative'
  if (type === 'nonDefining') return 'text-negative'
  return 'text-interrogative'
}
