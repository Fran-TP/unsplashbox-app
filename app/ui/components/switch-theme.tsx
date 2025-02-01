'use client'

import { useEffect, useState } from 'react'

const SwitchTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')
  const isDark = theme === 'dark'

  useEffect(() => {
    const root = document.documentElement

    root.classList.add(theme)

    localStorage.setItem('theme', theme)

    return () => root.classList.remove(theme)
  }, [theme])

  return (
    <input
      name="theme"
      type="checkbox"
      checked={isDark}
      onChange={() => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}

export default SwitchTheme
