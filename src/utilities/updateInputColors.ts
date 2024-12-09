export function updateInputColors (input: HTMLInputElement, result: boolean) {
  input.classList.remove(
    'border-b-white',
    'border-b-correct',
    'border-b-incorrect'
  )
  input.classList.add(`border-b-${result ? 'correct' : 'incorrect'}`)
}
