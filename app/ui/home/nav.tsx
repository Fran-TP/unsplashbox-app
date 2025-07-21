'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SwitchTheme from '../components/theme-switch'
import GalleryIcon from '../icons/gallery'
import HomeIcon from '../icons/home'
import UnsplashBoxLogo from '../icons/logo'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Collections', href: '/collections', icon: GalleryIcon }
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="w-7 flex-none overflow-hidden md:w-auto dark:invert"
      >
        <UnsplashBoxLogo className="h-6 w-auto" />
      </Link>
      <ul className="flex space-x-3 text-sm items-center">
        {links.map(link => {
          const Icon = link.icon
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'flex items-center justify-center rounded-sm p-2 font-medium transition-colors duration-200 ease-in md:px-6 md:py-[0.65rem]',
                  {
                    'bg-light dark:bg-gray-800 dark:text-light':
                      pathname === link.href,
                    'text-muted-gray hover:text-dark dark:hover:text-light':
                      pathname !== link.href
                  }
                )}
              >
                <Icon className="h-6 w-6 md:hidden" />
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          )
        })}
        <li>
          <SwitchTheme />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
