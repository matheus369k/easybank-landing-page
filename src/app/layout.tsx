import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import { Footer } from '@/components/Footer'

const PublicSans = Public_Sans({
  variable: '--font-public-sans',
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | EasyBank landing page',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={PublicSans.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
