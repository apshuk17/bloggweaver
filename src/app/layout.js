import { cx } from '@/utils'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' })

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-mr' })

export const metadata = {
  title: 'A personal blog',
  description: 'Created by Apoorva Shukla for personal use',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, 'font-mr', 'bg-light', 'dark:bg-dark')}>{children}</body>
    </html>
  )
}
