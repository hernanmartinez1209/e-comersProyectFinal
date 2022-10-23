import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import stylesCart from '../styles/stylesCart.css'
const CartProducts = ({product}) => {
    //console.log(product);
    const navigate =  useNavigate()
    const dispatch = useDispatch()

    const handleNavigation = () => {
    navigate(`/product/${product.id}`)
    }
    const handleAddCart = e =>{
        e.stopPropagation()
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data ={
            id:product.id,
            quantity: 1

        }
        axios.post(url ,data,getConfig('token'))
        .then(res =>{
             console.log(res.data)
            dispatch(getAllCart)
            })
        .catch(err =>console.log(err))
    }
  return (
    <article onClick={handleNavigation} className='container__products'>
         <div className='products__body'>
        <header className='product__header' >
            <img className='img__product' src={product.productImgs[0]} />
        </header>
            <h3 className='products__title'>{product.title}</h3>
            <div className='product__price'>
                <span className='product__price-label'>Price</span>
                <p className='product__price-number'>$ {product.price}</p>
            </div>
            <button onClick={handleAddCart} className='products__icon-container'>
            <i className='products__icon fa-solid fa-cart-shopping'></i>
            
            </button>
            
        </div>     
    </article>
  )
}

export default CartProducts