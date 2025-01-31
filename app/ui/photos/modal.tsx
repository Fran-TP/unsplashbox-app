'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '../icons/close'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!dialogRef?.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  const handleDismiss = () => {
    dialogRef.current?.close()

    setTimeout(router.back, 310)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleDismiss()
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-auto bg-dark backdrop:bg-[linear-gradient(45deg,var(--tw-gradient-stops))] backdrop:from-green-700/90 backdrop:to-transparent rounded-lg w-[80vw] overflow-x-clip"
    >
      {children}
      <button
        type="button"
        onClick={handleDismiss}
        onKeyDown={handleKeyDown}
        className="absolute top-4 right-4 dark:text-light/80 text-dark/80"
      >
        <CloseIcon className="size-7 stroke-2 opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in" />
      </button>
    </dialog>,
    document.body
  )
}

export default Modal
