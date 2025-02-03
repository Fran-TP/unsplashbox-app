import type { Metadata } from 'next'
import { BeVietnamPro } from './fonts'
import './globals.css'
import { ThemeProvider } from 'next-themes'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${BeVietnamPro.className} antialiased`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
