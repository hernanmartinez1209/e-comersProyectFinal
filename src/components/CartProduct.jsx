import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const CartProduct = ({product}) => {
 const dispatch = useDispatch()
    const handleDelete = () =>{
  const url =`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(url,getConfig())
  .then(res => {
    console.log(res.data)
    dispatch(getAllCart())
})
  .catch(err => console.log(err))
    }
  return (
    <article>
      <h2>{product.title}</h2>
      <ul>
        <li><span>price</span>{product.price}</li>
        <li><span>Quatity</span>{product.quantity}</li>
      </ul>
      <p>{product.description}</p>
      <button onClick={handleDelete}><i className='fa-regular fa-trash-can'></i>
</button>

    </article>
  )
}

export default CartProduct