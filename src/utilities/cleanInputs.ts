export function cleanInputs (
  inputs: React.MutableRefObject<HTMLInputElement[]>
) {
  inputs.current.forEach(input => {
    input.value = ''

    input.classList.remove(
      'border-b-white',
      'border-b-affirmative',
      'border-b-negative'
    )

    input.classList.add("border-b-white")
  })

  inputs.current = []
}
