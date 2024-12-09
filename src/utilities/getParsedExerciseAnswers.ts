export function getParsedExerciseAnswers (
  parsedExercise: (string | string[])[]
): string[][] {
  return parsedExercise.filter((part): part is string[] => Array.isArray(part))
}
