import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harper Foley',
  description: 'Personal portfolio and blog for Full Stack Developer Harper Foley.',
}

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
