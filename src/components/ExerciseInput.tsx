import { forwardRef } from 'react'

export const ExerciseInput = forwardRef<HTMLInputElement, object>((_, ref) => {
  return (
    <input
      ref={ref}
      className='bg-transparent border-b-white border-b-4 focus:outline-none focus:border-b-8 text-[#fffa]'
      type='text'
    />
  )
})
