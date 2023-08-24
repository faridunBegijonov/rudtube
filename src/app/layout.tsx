'use client'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'
import { Navbar, Sidebar } from '@/widgets'
import favicon from './icon.svg'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const width = window.innerWidth

  const [showSidebar, setShowSidebar] = useState<boolean>(
    width <= 600 ? false : true
  )

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }
  return (
    <>
      <html lang="en">
        <head>
          <title>RudTube</title>
          <link rel="icon" href={favicon.src} />
        </head>
        <body className={`${inter.className} max-w-[1580px] mx-auto`}>
          <main className="flex">
            <Sidebar callBackFn={handleSidebar} isShow={showSidebar} />
            <div
              className={`p-4 ${
                showSidebar
                  ? `${width <= 1024 ? 'w-full' : 'w-[80%] ml-auto'}`
                  : 'w-full'
              }`}
            >
              <Navbar callBackFn={handleSidebar} />
              {children}
            </div>
          </main>
        </body>
      </html>
    </>
  )
}
