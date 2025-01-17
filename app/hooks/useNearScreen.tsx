'use client'

import { useEffect, useRef, useState } from 'react'

interface NearScreenProps {
  distance?: string
  threshold?: number
  externalRef: React.RefObject<HTMLDivElement | null>
}

const THRESHOLD = 0
const DEFAULT_DISTANCE = '100px'

export const useNearScreen = ({
  distance = DEFAULT_DISTANCE,
  threshold = THRESHOLD,
  externalRef
}: NearScreenProps) => {
  const [isNearScreen, setShow] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!externalRef.current) return
    if (observerRef.current) observerRef.current.disconnect()

    const observer = new IntersectionObserver(
      entries => {
        const { isIntersecting } = entries[0]

        setShow(isIntersecting)
      },
      {
        rootMargin: distance,
        threshold: threshold
      }
    )

    observer.observe(externalRef.current)
    observerRef.current = observer

    return () => observer.disconnect()
  }, [distance, externalRef, threshold])

  return { isNearScreen, observer: observerRef.current }
}
