import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'WeLoveLoft — stal i szkło bez spiny',
  description: 'Drzwi loftowe, ścianki i balustrady z charakterem. Linea robi dobre wnętrza w Warszawie i całej Polsce.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e8e5df',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
