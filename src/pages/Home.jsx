import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from '../components/home/CartProducts'
import { getAllProducts } from '../store/slices/products.slices'

const Home = () => {
  const  products = useSelector( state => state.products)

 const dispatch =  useDispatch()
 useEffect(() => {
      dispatch(getAllProducts())
 }, [])
 
 // console.log(products);
  return (
    <main className='home'>
      <div className='home_container'>
        {
            products?.map(product =>(
                <CartProducts  key={product.id} 
                product={product}
                />
            ) )
        }

      </div>
    </main>
  )
}

export default Home