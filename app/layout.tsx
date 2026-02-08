import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shabina Bozai | Principal Software Engineer',
  description: 'Principal Software Developer with 20+ years of experience architecting enterprise platforms. Java Architect specializing in microservices, Spring Boot, and application modernization.',
  keywords: ['Principal Software Engineer', 'Java Architect', 'Spring Boot', 'Microservices', 'Enterprise Architecture', 'Application Modernization'],
  authors: [{ name: 'Shabina Bozai' }],
  openGraph: {
    title: 'Shabina Bozai | Principal Software Engineer',
    description: 'Principal Software Developer with 20+ years of experience architecting enterprise platforms',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
