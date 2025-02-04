'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <select
      value={theme}
      name="theme"
      onChange={e => setTheme(e.target.value)}
      className="text-dark dark:text-lighter bg-lighter dark:bg-dark"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default SwitchTheme
