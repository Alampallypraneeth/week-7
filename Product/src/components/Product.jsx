import { useLocation, useNavigate } from 'react-router'

function Product() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.product

  // Fallback in case of direct routing without state
  if (!product) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <p className="text-zinc-500 mb-6">No product selected.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-zinc-950 text-white rounded-xl font-medium tracking-wide hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          Go to Collection
        </button>
      </div>
    )
  }

  return (
    <div className="py-6 sm:py-12 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 font-medium mb-10 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </button>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Image Card */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-8 sm:p-12 flex items-center justify-center shadow-xs">
          <div className="max-w-xs sm:max-w-sm w-full h-80 sm:h-[400px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Column: Details Info */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
            {product.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mt-3 leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center text-amber-400">
                <span className="text-sm">★</span>
                <span className="text-sm font-semibold text-zinc-700 ml-1">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-zinc-200">|</span>
              <span className="text-xs text-zinc-400">
                {product.rating.count} customer reviews
              </span>
            </div>
          )}

          {/* Pricing */}
          <div className="mt-6 py-4 border-y border-zinc-100">
            <span className="text-3xl font-extrabold text-zinc-950">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Description
            </h3>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => alert(`Added "${product.title}" to cart.`)}
              className="flex-grow py-4 bg-zinc-950 text-white font-semibold text-sm tracking-wider rounded-xl shadow-lg shadow-zinc-950/10 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => alert("Proceeding to checkout.")}
              className="py-4 px-8 bg-zinc-50 border border-zinc-200 text-zinc-700 font-semibold text-sm tracking-wider rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors cursor-pointer"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product