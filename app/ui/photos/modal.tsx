'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '../icons/close'
import { useModalScrollLock } from '@/app/hooks/useModalScrollLock'
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
      className="m-auto bg-lighter dark:bg-dark backdrop:backdrop-blur-sm rounded-lg w-[90vw] md:w-[80vw] overflow-x-clip"
    >
      {children}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-4 right-4 dark:text-light/80 text-dark/80 cursor-pointer"
      >
        <CloseIcon className="size-7 stroke-2 opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in" />
      </button>
    </dialog>,
    document.body
  )
}

export default Modal
