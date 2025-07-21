'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Check from '../icons/check'
import Desk from '../icons/desk'
import Moon from '../icons/moon'
import Sun from '../icons/sun'

const menus: Record<string, typeof Moon> = {
  dark: Moon,
  light: Sun,
  system: Desk
}

const themes = [
  { name: 'system', icon: Desk },
  { name: 'dark', icon: Moon },
  { name: 'light', icon: Sun }
]

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const CurrentIcon = menus[theme ?? ''] ?? <Desk />
  useEffect(() => setMounted(true), [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="group relative border-red-500 menu-theme">
      <button
        type="button"
        className="cursor-pointer border-gray-800 p-2 peer rounded-md hover:bg-gray-300 dark:hover:bg-gray-800"
        aria-label="Switch theme"
        title="switch theme"
      >
        <CurrentIcon className="size-4 text-dark dark:text-light" />
      </button>
      <ul className="themes absolute right-0 top-full z-10 hidden bg-lighter text-dark peer-focus-visible:block group-hover:block dark:bg-dark dark:text-lighter rounded-sm overflow-clip border-2 border-light dark:border-gray-700">
        {themes.map(({ name }) => {
          return (
            <li
              key={name}
              onClick={() => handleThemeChange(name)}
              onKeyUp={() => handleThemeChange(name)}
              className={clsx(
                'flex items-center gap-2 pl-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 pr-8 relative cursor-pointer font-light dark:text-gray-300'
              )}
            >
              {name}
              {theme === name && (
                <Check className="size-4 text-dark dark:text-gray-300 font-light absolute right-2" />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SwitchTheme
