import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50 text-zinc-800 antialiased font-sans">
      <Header/>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default RootLayout