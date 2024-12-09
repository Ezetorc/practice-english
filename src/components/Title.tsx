import { useEffect, useState } from 'react'

interface TitleProps {
  main: string[] | string
  sub: string
  className?: string
}

export function Title ({ main, sub, className }: TitleProps) {
  const [index, setIndex] = useState<number>(0)
  const [isLeaving, setIsLeaving] = useState<boolean>(false)
  const isAnimated: boolean = typeof main !== 'string'
  const time: number = 1500

  useEffect(() => {
    if (!isAnimated) return
    const interval: NodeJS.Timeout = setInterval(() => {
      setIsLeaving(true)
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % main.length)
        setIsLeaving(false)
      }, 100)
    }, time)

    return () => clearInterval(interval)
  }, [main.length, time, isAnimated])

  return (
    <div className={`w-full h-fit flex flex-col justify-center ${className}`}>
      <h2
        className={`text-selective-yellow text-[clamp(40px,11vw,140px)] text-pretty
          ${isLeaving && isAnimated ? 'animate-leave' : 'animate-enter'}`}
        key={main[index]}
      >
        {isAnimated ? main[index] : main}
      </h2>
      <h3 className='text-white text-[clamp(40px,10vw,130px)] mt-[-4%]'>
        {sub}
      </h3>
    </div>
  )
}
