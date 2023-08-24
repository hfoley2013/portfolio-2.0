import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Harper Foley',
    template: '%s | Harper Foley'
  },
  description: 'Harper Foley is a serial entrepreneur, full stack developer, and Navy Special Operations Veteran. He currently owns and operates Rainier Digital Solutions, a 100% veteran-owned and operated web development agency.',
  creator: 'Harper Foley',
  applicationName: "Modern Portfolio for Harper Foley",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  metadataBase: new URL('https://harperfoley.com'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'Harper Foley | Full Stack Developer',
    url: 'https://harperfoley.com',
    images: {
      url: 'https://media-private.canva.com/S6HfM/MAFsbKS6HfM/1/tl.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230824%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230824T023241Z&X-Amz-Expires=23270&X-Amz-Signature=61d04969a2e1b796da10a3e1e95eba6e215b14860547c65b7ca948e92dacd406&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2024%20Aug%202023%2009%3A00%3A31%20GMT',
      width: 350,
      height: 320,
      alt: 'Harper Foley',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harper Foley | Full Stack Developer',
    description: 'Harper Foley is a serial entrepreneur, full stack developer, and Navy Special Operations Veteran. He currently owns and operates Rainier Digital Solutions, a 100% veteran-owned and operated web development agency.',
    images: {
      url: 'https://media-private.canva.com/S6HfM/MAFsbKS6HfM/1/tl.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230824%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230824T023241Z&X-Amz-Expires=23270&X-Amz-Signature=61d04969a2e1b796da10a3e1e95eba6e215b14860547c65b7ca948e92dacd406&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2024%20Aug%202023%2009%3A00%3A31%20GMT',
      width: 350,
      height: 320,
      alt: 'Harper Foley',
    }
  }
}

export const revalidate = 3600 // revalidate at most every hour

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
