import React from 'react'
import { useDispatch } from 'react-redux'
import { donwProducts, upProducts } from '../../store/slices/products.slices'
import sylesOrderByPrice from '../styles/sylesOrderByPrice.css'
const OrderByPrice = () => {
   const dispatch =  useDispatch()
  const handleup = () => {
   dispatch(upProducts())
  }
  const handleDown = () =>{
   dispatch(donwProducts())
  }
    return (
    <div className='contain__Order'>
        
        <h3 className='title__Order'>OrderByPrice</h3>
    <button className='btn__Order' onClick={handleup}>Order Up</button>
    <button className='btn__Order' onClick={handleDown}>Order down</button>    
    </div>
  
  )
}

export default OrderByPrice