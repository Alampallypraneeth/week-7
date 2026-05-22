import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function ProductsList() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const navigate = useNavigate()

  const gotoProduct = (productObj) => {
    navigate('/product', { state: { product: productObj } })
  }

  useEffect(() => {

    async function getProducts() {
      try {
        setLoading(true)

        let res = await fetch("https://fakestoreapi.com/products")

        if (res.ok) {
          let productsData = await res.json()
          setProducts(productsData)
        } else {
          throw new Error("Failed to fetch products")
        }

      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    getProducts()

  }, [])
  const categories = ["all", ...new Set(products.map(p => p.category))]

  const filteredProducts = products.filter((productObj) => {

    const matchesSearch = productObj.title.toLowerCase().includes(searchText.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      productObj.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-10 h-10 border-4 border-zinc-200 border-t-zinc-950 rounded-full animate-spin"></div>
        <p className="mt-4 text-zinc-500 font-medium">Curating our premium catalog...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-center mt-12 animate-fade-in">
        <p className="text-red-600 font-semibold">Unable to load products</p>
        <p className="text-xs text-red-500 mt-1">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10 pb-6 border-b border-zinc-100">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Collection</h2>
          <p className="text-xs text-zinc-400 mt-1">Discover refined pieces selected for modern quality.</p>
        </div>

        <div className="flex w-full md:w-auto items-center gap-4">
          {/* Search input with icon */}
          <div className="relative flex-grow md:flex-grow-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search items..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white text-sm text-zinc-800 placeholder-zinc-400 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200"
            />
          </div>

          {/* Custom Select with arrow */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pr-10 pl-4 py-2.5 bg-white text-sm text-zinc-700 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 transition-all duration-200 cursor-pointer"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full py-20 text-center">
            <p className="text-zinc-400 text-lg">No matches found in our database.</p>
          </div>
        ) : (
          filteredProducts.map((productObj) => (
            <div
              key={productObj.id}
              onClick={() => gotoProduct(productObj)}
              className="group bg-white rounded-2xl border border-zinc-100/80 p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Product Image Wrapper */}
                <div className="h-48 w-full bg-white rounded-xl flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={productObj.image}
                    alt={productObj.title}
                    className="h-full max-h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {productObj.rating && (
                    <span className="absolute top-2 right-2 bg-zinc-50 border border-zinc-100 text-zinc-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      ★ {productObj.rating.rate}
                    </span>
                  )}
                </div>

                {/* Category label */}
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mt-4">
                  {productObj.category}
                </span>

                {/* Title */}
                <h3 className="text-sm font-semibold text-zinc-800 tracking-tight mt-1 leading-snug line-clamp-2 group-hover:text-zinc-950 transition-colors">
                  {productObj.title}
                </h3>
              </div>

              {/* Price and Cart button */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-zinc-900">
                    ${productObj.price.toFixed(2)}
                  </span>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Added "${productObj.title}" to cart.`);
                    }}
                    className="p-2 bg-zinc-50 border border-zinc-200 text-zinc-700 rounded-xl hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-200 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProductsList