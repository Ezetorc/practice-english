import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export function Modal ({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#0008] w-screen h-screen'>
      <div className='bg-selective-yellow p-[20px] rounded-lg shadow-lg w-[clamp(320px,30%,500px)] aspect-video animate-enter'>
        <div className='flex justify-between items-center'>
          {title && (
            <h2 className='text-[clamp(30px,3vw,60px)] font-bold text-persimmon'>{title}</h2>
          )}

        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
