import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '我永远喜欢XX',
  description: '表达对XX的热爱和情感',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={['light', 'dark', 'ocean', 'forest', 'cute']}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

