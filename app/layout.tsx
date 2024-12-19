import type { Metadata } from 'next'
import { BeVietnamPro } from './fonts'
import './globals.css'

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'UnsplashBox',
  description: `
    A simple app to search for images
    from Unsplash and download them.
  `,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://res.cloudinary.com/djirdehhp/image/upload/v1619549825/unsplash-box/icon-dark.svg',
        href: 'icon-dark.svg'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://res.cloudinary.com/djirdehhp/image/upload/v1619549825/unsplash-box/icon-light.svg',
        href: 'icon-light.svg'
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
