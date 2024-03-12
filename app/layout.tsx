import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sibusiso Simelane',
  description: 'Sibusiso S Simelane Developer Profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gradient-to-b from-gray-800 to-navy-900'>
          {children}
          <About />
          <Projects />
          <Contact />
          <Footer />  
        </div>
      </body>
    </html>
  )
}
