'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [scrollPosition, setScrollPosition] = useState<number | null>(null)

  useEffect(() => {
    setScrollPosition(window.scrollY)
    document.body.style.overflow = 'hidden'

    if (!dialogRef?.current?.open) {
      dialogRef.current?.showModal()
    }

    return () => {
      document.body.style.overflow = ''
      if (scrollPosition !== null) {
        window.scrollTo(0, scrollPosition)
      }
    }
  }, [scrollPosition])

  const handleDismiss = () => {
    dialogRef.current?.close()

    setTimeout(router.back, 310)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Escape') return

    handleDismiss()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="bg-dark backdrop:bg-[linear-gradient(45deg,var(--tw-gradient-stops))] backdrop:from-green-700/90 backdrop:to-transparent rounded-lg"
    >
      {children}
      <button
        type="button"
        onClick={handleDismiss}
        onKeyDown={handleKeyDown}
        className="absolute top-4 right-4 dark:text-light/80 text-dark/80"
      >
        ❌
      </button>
    </dialog>,
    document.body
  )
}

export default Modal
