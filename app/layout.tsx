import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','600','700'],
})

export const metadata = {
  title: 'For You ❤️',
  description: 'A small surprise made with love',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
