import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script, Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

// Optimize font loading with display swap
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://asheshdhakal.com'),
  title: 'Ashesh Dhakal - Portfolio',
  description: 'Student at University of Manitoba, passionate about machine learning, data science and software development and technology. View my projects and professional experience.',
  keywords: ['Ashesh Dhakal', 'Software Developer', 'University of Manitoba', 'Student Developer','Machine Learning', 'Portfolio'],
  authors: [{ name: 'Ashesh Dhakal' }],
  creator: 'Ashesh Dhakal',
  openGraph: {
    type: 'website',
    url: 'https://asheshdhakal.com',
    title: 'Ashesh Dhakal - Portfolio',
    description: 'Student at University of Manitoba, passionate about machine learning, data science and software development and technology. View my projects and professional experience.',
    siteName: 'Ashesh Dhakal Portfolio',
    images: [{
      url: '/images/profile.jpg',
      width: 1200,
      height: 630,
      alt: 'Ashesh Dhakal'
    }]
  },
  icons: {
    icon: [
      {
        url: '/images/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/images/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: {
      url: '/images/favicons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    other: [
      {
        rel: 'android-chrome-192',
        url: '/images/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome-512',
        url: '/images/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/images/profile/Ashesh Dhakal.png"
          as="image"
          type="image/png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${poppins.variable} ${dancingScript.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
