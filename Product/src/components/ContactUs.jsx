import React from 'react'

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will connect with you shortly.");
  };

  return (
    <div className="max-w-2xl mx-auto py-12 animate-fade-in">
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3 block">
          Get in Touch
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
          We'd love to hear from you
        </h1>
        <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
          Have a question about our curated products, order status, or custom sizing? Send us a message below.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-100 p-8 sm:p-10 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                required
                className="w-full px-4 py-3 bg-zinc-50 text-zinc-800 placeholder-zinc-400 rounded-xl border border-zinc-200 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                required
                className="w-full px-4 py-3 bg-zinc-50 text-zinc-800 placeholder-zinc-400 rounded-xl border border-zinc-200 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-zinc-50 text-zinc-800 placeholder-zinc-400 rounded-xl border border-zinc-200 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-zinc-50 text-zinc-800 placeholder-zinc-400 rounded-xl border border-zinc-200 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200 resize-none"
              placeholder="Tell us details about your request..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 bg-zinc-950 text-white font-semibold text-sm tracking-wider rounded-xl shadow-lg shadow-zinc-950/10 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs