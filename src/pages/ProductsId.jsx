import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import SliderImgs from '../components/productId/SliderImgs'

const ProductsId = () => {
  const [products, setproducts] = useState()
  const {id} = useParams()




useEffect(() => {
  const url =`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`

  axios.get(url)
  .then(res => setproducts(res.data.data.product))
   .catch(err => console.log(err))
}, [id])
console.log(products);

  return (
    <div>
      {
        products && <SliderImgs products={products}/>
      }
      <ProductInfo
      products={products}
      />
      <SimilarProducts
      products={products}
      />
    </div>
  )
}

export default ProductsId