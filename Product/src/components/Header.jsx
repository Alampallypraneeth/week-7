import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="p-1.5 bg-zinc-950 rounded-lg text-white transition-transform duration-300 group-hover:rotate-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </span>
            <span className="text-xl font-extrabold tracking-widest text-zinc-900 group-hover:text-zinc-600 transition-colors duration-200">
              ATELIER
            </span>
          </NavLink>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? "text-zinc-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-zinc-200"
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? "text-zinc-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-zinc-200"
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? "text-zinc-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-zinc-200"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header