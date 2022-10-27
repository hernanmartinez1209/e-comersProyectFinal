import React from 'react'
import { useDispatch } from 'react-redux'
import { donwProducts, upProducts } from '../../store/slices/products.slices'

const OrderByPrice = () => {
   const dispatch =  useDispatch()
  const handleup = () => {
   dispatch(upProducts())
  }
  const handleDown = () =>{
   dispatch(donwProducts())
  }
    return (
    <div>
        
        OrderByPrice
    <button onClick={handleup}>Order Up</button>
    <button onClick={handleDown}>Order down</button>    
    </div>
  
  )
}

export default OrderByPrice