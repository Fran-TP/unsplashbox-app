'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!dialogRef?.current?.open) {
      dialogRef?.current?.showModal()
    }
  }, [])

  const handleDismiss = () => {
    dialogRef.current?.close()

    setTimeout(router.back, 310)
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
        className="absolute top-4 right-4 dark:text-light/80 text-dark/80"
      >
        ❌
      </button>
    </dialog>,
    document.body
  )
}

export default Modal
