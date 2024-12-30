import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script, Playfair_Display } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Ashesh Dhakal - Portfolio',
  
  description: 'Software Developer Portfolio',
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
      <body
        className={`${geist.variable} ${geistMono.variable} ${poppins.variable} ${dancingScript.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
