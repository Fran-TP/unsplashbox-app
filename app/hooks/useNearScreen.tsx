import { useState } from 'react'

interface NearScreenProps {
  distance: string
  externalRef: React.RefObject<HTMLDivElement | null>
}

export const useNearScreen = ({
  distance = '100px',
  externalRef
}: NearScreenProps) => {
  const [isNearScreen, setShow] = useState(false)

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
      threshold: 0.0
    }
  )

  externalRef.current && observer.observe(externalRef.current)

  return { isNearScreen, observer }
}
