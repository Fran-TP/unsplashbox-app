'use client'

import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
        } else {
          setShow(false)
        }
      },
      {
        rootMargin: distance,
        threshold: threshold
      }
    )

    externalRef.current && observer.observe(externalRef.current)
  }, [distance, externalRef])

  return { isNearScreen }
}
