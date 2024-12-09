export function getParsedExercise (exercise: string) {
  const pattern = /\[([^\]]+)\]/g
  const result = []
  let lastIndex = 0

  for (const match of exercise.matchAll(pattern)) {
    const [fullMatch, insideBrackets] = match
    const matchIndex = match.index

    result.push(exercise.slice(lastIndex, matchIndex))

    result.push(insideBrackets.split('/'))

    lastIndex = matchIndex + fullMatch.length
  }

  if (lastIndex < exercise.length) {
    result.push(exercise.slice(lastIndex))
  }

  return result
}
