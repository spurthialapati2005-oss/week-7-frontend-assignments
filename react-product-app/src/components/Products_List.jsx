import { React, useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router'

function Products_List() {

  const { searchTerm } = useOutletContext()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const gotoProduct = (productObj) => {
    navigate('/product', { state: { product: productObj } })
  }

  useEffect(() => {
    async function getProducts(){
      let res = await fetch("https://fakestoreapi.com/products")
      let data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    getProducts()
  }, [])

  if (loading) return <p>Loading...</p>

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-12 
                    mt-10 
                    text-center">
      {filteredProducts.length === 0 ? (
        <p className="text-red-500 text-xl col-span-4 text-center">
          No products found
        </p>
      ) : (
        filteredProducts.map(productObj => (
          <div
            key={productObj.id}
            onClick={()=>gotoProduct(productObj)}
            className='shadow-md p-6 cursor-pointer'
          >
            <img src={productObj.image} className='h-40 mx-auto'/>
            <p>{productObj.title}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Products_List