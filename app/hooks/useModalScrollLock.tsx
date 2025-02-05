'use client'

import { useLayoutEffect } from 'react'

export function useModalScrollLock() {
  useLayoutEffect(() => {
    // Save the current scroll position.
    const scrollY = window.scrollY

    // Lock the scroll on the document body.
    document.body.style.top = `-${scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'

    // Cleanup: restore body styles and scroll position.
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [])
}
