import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import stylesCard from '../components/styles/stylesCard.css'

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
    <article className='box__cart-buy'>
      <h2 className='cart__buy-title'>{product.title}</h2>
      
      <ul className='contain__info-cart-buy'>
        <li className='item__cart-buy'><span className='name_item__cart-buy'>price:</span>{product.price}</li>
        <li className='item__cart-buy'><span className='name_item__cart-buy'>Quatity:</span>{product.quantity}</li>
      </ul>
      <p className='info__cart-buy'>{product.description}</p>
      <button className='btnDelete__cart-buy' onClick={handleDelete}><i className='fa-regular fa-trash-can'></i>
</button>

    </article>
  )
}

export default CartProduct