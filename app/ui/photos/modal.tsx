'use client'

import { useModalScrollLock } from '@/app/hooks/useModalScrollLock'
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

  useModalScrollLock()

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  const handleClose = () => {
    setTimeout(router.back, 310)
  }

  const handleDismiss = () => {
    dialogRef.current?.close()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="m-auto h-[85%] w-[90vw] overflow-x-clip rounded-lg bg-lighter backdrop:backdrop-blur-sm md:w-[80vw] dark:bg-dark"
    >
      {children}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-4 right-4 cursor-pointer text-dark/80 dark:text-light/80"
      >
        <CloseIcon className="size-7 stroke-2 opacity-80 transition-opacity duration-150 ease-in hover:opacity-100" />
      </button>
    </dialog>,
    document.body
  )
}

export default Modal
