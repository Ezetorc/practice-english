export function getSentenceClass (type: string): string {
  if (type === 'affirmative') return 'text-affirmative'
  if (type === 'negative') return 'text-negative'
  if (type === 'interrogative') return 'text-interrogative'
  return 'text-black'
}
