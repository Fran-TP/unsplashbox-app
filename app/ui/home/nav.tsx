'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchIcon from '../icons/search'
import UnsplashBoxLogo from '../icons/logo'
import HomeIcon from '../icons/home'
import GalleryIcon from '../icons/gallery'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Collections', href: '/collections', icon: GalleryIcon }
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="w-7 overflow-hidden flex-none md:w-auto dark:invert"
      >
        <UnsplashBoxLogo className="h-6 w-auto" />
      </Link>
      <ul className="flex space-x-3 text-sm">
        {links.map(link => {
          const Icon = link.icon
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'md:px-6 md:py-[0.65rem] p-2 flex justify-center items-center font-medium rounded transition-colors duration-200 ease-in',
                  {
                    'bg-light dark:bg-gray-800 dark:text-light':
                      pathname === link.href,
                    'text-muted-gray hover:text-dark dark:hover:text-light':
                      pathname !== link.href
                  }
                )}
              >
                <Icon className="md:hidden h-6 w-6" />
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
