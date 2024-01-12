import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capybara',
  description: 'Capybara project'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="fr">
        <meta property="og:image" content="/favicon.ico" />
        <body className={ cn(
            "antialiased font-sans",
            inter.className
          )}>{children}</body>
      </html>
    </SessionProvider>
  )
}