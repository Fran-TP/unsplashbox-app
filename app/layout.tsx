import type { Metadata } from 'next'
import { BeVietnamPro } from './fonts'
import './globals.css'

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'UnsplashBox',
  description: `
    A simple app to search for images from Unsplash and download them.
  `,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '',
        href: '/icon-dark.svg'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '',
        href: '/icon-light.svg'
      }
    ]
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${BeVietnamPro.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
