import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
// import CartProducts from '../components/home/CartProducts'
import { getAllCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {
  const cart  = useSelector(state => state.cart)
 const dispatch =  useDispatch()

 useEffect(() => {
   dispatch(getAllCart())
 }, [])
 
console.log(cart);
 
 const handlePurshes = ( ) =>{
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
  const data = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }

  axios.post(URL,data,getConfig())
  .then(res => {
    console.log(res.data)
    dispatch(setCartGlobal(null))   
  })
  .catch(err => console.log(err))
 }
return (
    <div>Cart
    <div>
      {
         cart?.products.map(product => (
         
            <CartProduct 
            product={product}
            key={product.id}
            />
           
         
         ))
      }
   </div>
      <button onClick={handlePurshes}>Buy Now</button>
    </div>
  )
}

export default Cart