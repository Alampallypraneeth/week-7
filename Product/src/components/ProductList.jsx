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
      <p className="text-center text-2xl text-blue-500 mt-10">
        Loading...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-center text-2xl text-red-500 mt-10">
        {error.message}
      </p>
    )
  }

  return (
    <div>

      <div className="flex justify-center items-center gap-4 mt-6">

        <input
          type="text"
          placeholder="Search product..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border p-2 w-1/3 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-10">

        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">No products found</p>
        ) : (
          filteredProducts.map((productObj) => (
            <div
              onClick={() => gotoProduct(productObj)}
              key={productObj.id}
              className="border p-4 rounded shadow-2xl hover:shadow-lg transition cursor-pointer "
            >
              <img
                src={productObj.image}
                alt={productObj.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="text-lg font-semibold mt-4 line-clamp-2">
                {productObj.title}
              </h2>
              <p className="text-gray-600 mt-2 font-medium ">${productObj.price}</p>
              <div className="flex justify-center">
                <button type="button" className="bg-blue-400 px-4 py-2 rounded cursor-pointer">Add to Cart</button>
          </div>
          </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProductsList