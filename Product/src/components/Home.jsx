import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="py-12 sm:py-20 flex flex-col items-center animate-fade-in">
      {/* Premium minimal label */}
      <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
        New Season Arrival
      </span>

      {/* Styled Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 text-center max-w-3xl leading-[1.1] mb-6">
        Curated Styles for the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500">
          Modern Individual
        </span>
      </h1>

      {/* Subheading text */}
      <p className="text-base sm:text-lg text-zinc-500 text-center max-w-lg leading-relaxed mb-10">
        Experience an exquisite collection of luxury essentials, meticulously crafted to bring sophistication and purpose into your daily life.
      </p>

      {/* Hero Interactive Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/products"
          className="px-8 py-4 bg-zinc-950 text-white font-semibold text-sm tracking-wider rounded-xl shadow-lg shadow-zinc-950/10 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          SHOP THE COLLECTION
        </Link>
        <Link
          to="/contactus"
          className="px-8 py-4 bg-white text-zinc-700 border border-zinc-200 font-semibold text-sm tracking-wider rounded-xl hover:bg-zinc-50 hover:text-zinc-950 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          TALK TO STYLIST
        </Link>
      </div>

      {/* Curated Grid Showcases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24 max-w-5xl">
        <div className="p-8 bg-white rounded-2xl border border-zinc-100/80 shadow-xs flex flex-col items-center text-center">
          <span className="p-3 bg-zinc-50 rounded-xl text-zinc-800 mb-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </span>
          <h3 className="text-base font-bold text-zinc-900">High-End Quality</h3>
          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
            Crafted from hand-selected premium organic fabrics and luxury materials built to last.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-zinc-100/80 shadow-xs flex flex-col items-center text-center">
          <span className="p-3 bg-zinc-50 rounded-xl text-zinc-800 mb-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </span>
          <h3 className="text-base font-bold text-zinc-900">Minimal Aesthetics</h3>
          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
            Sleek designs, subtle tones, and flawless shapes that perfectly blend into your environment.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-zinc-100/80 shadow-xs flex flex-col items-center text-center">
          <span className="p-3 bg-zinc-50 rounded-xl text-zinc-800 mb-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="text-base font-bold text-zinc-900">Sustainable Focus</h3>
          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
            Ethically sourced and responsibly packaged, supporting eco-conscious manufacturing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home