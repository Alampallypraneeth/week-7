import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="text-lg font-bold tracking-widest text-zinc-900">ATELIER</span>
            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              A curated destination for minimalist essentials, high-end craftsmanship, and timeless styles designed to elevate your everyday lifestyle.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest">Shop & Discover</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest">Contact & Help</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contactus" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="text-sm text-zinc-400">
                Email: support@atelier.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">&copy; {new Date().getFullYear()} ATELIER Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer