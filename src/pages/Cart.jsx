import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
// import CartProducts from '../components/home/CartProducts'
import { getAllCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

const [total, setTotal] = useState(0)
  const cart  = useSelector(state => state.cart)
 const dispatch =  useDispatch()

 useEffect(() => {
   dispatch(getAllCart())
 }, [])
 
console.log(cart);

 useEffect(() => {
  if(cart){
    const result = cart.products.reduce((acc, cv) =>{
      return acc + Number(cv.price) * cv.productsInCart.quantity
    }, 0)
    setTotal(result)
   }
 }, [cart])
 
 
 
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
    setTotal(0)   
  })
  .catch(err => console.log(err))
  
 }
return (
    <div>
      <h1 className='title__containt-cart-buy'>Shopping Card</h1>
    <div className='contain__cardProduct'>
      {
         cart?.products.map(product => (
            <CartProduct 
            product={product}
            key={product.id}
            />
         ))
      }
   </div >
      <h2>Total: ${total}</h2>
      <button className='btn-finisht_buy'  onClick={handlePurshes}>Buy Now <i className="fa-solid fa-basket-shopping"></i></button>
    </div>
  )
}

export default Cart