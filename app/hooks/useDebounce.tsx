import { useRef } from 'react'

export const useDebounce = (
  callback: (value: string) => void,
  delay: number
) => {
  const timeRef = useRef<number | null>(null)

  const debounce = (param: string) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }

    timeRef.current = window.setTimeout(callback, delay, param)
  }

  return debounce
}
