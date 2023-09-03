'use client'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { Next13ProgressBar } from 'next13-progressbar'
import { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { Navbar, Sidebar } from '@/widgets'
import favicon from './icon.svg'
import { store } from './store'
import 'react-toastify/ReactToastify.min.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()
  const width = window.innerWidth

  const [showSidebar, setShowSidebar] = useState<boolean>(
    width <= 1024 ? false : true
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
          <Next13ProgressBar
            height="4px"
            color="#536872FF"
            options={{ showSpinner: true }}
            showOnShallow
          />
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <main className="flex">
                <Sidebar callBackFn={handleSidebar} isShow={showSidebar} />
                <div
                  className={`${
                    showSidebar
                      ? `${width <= 1024 ? 'w-full' : 'w-[80%] ml-auto'}`
                      : 'w-full'
                  }`}
                >
                  <Navbar callBackFn={handleSidebar} />
                  {children}
                </div>
              </main>
            </QueryClientProvider>
          </Provider>
        </body>
      </html>
    </>
  )
}
