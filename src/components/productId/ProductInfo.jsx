import axios from "axios";
import React, { useState } from "react";
import getConfig from "../../utils/getConfig";
import stylesProductInfo from '../styles/stylesProductInfo.css'
const productsInfo = ({ products }) => {
  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const  handleAddvart = () =>{
   const url =`https://ecommerce-api-react.herokuapp.com/api/v1/cart`  
   const data = {
    id: products.id ,
    quantity: counter
   }
   
   axios.post(url ,data , getConfig())
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
  }

  return (
    <article className="products__info">
     {/* <div className="box__img-info">
       <img className="product__img" src={products?.productImgs[0]} />
     </div> */}
      <h2 className="products__info-title">{products?.title}</h2>
      <footer className="products-info__footer">
        <div className="products-info_prices-container">
          <h3 className="products-info__prices-label">Price</h3>
          <span className="products-info__prices-number">
            $ {products?.price}
          </span>
        </div>
        <div className="">
          <h3 className="products-info__Quantity-label">Quantity</h3>
          <div className="products-info__Quantity-btn">
            <div className="products-info__Quantity-btn-minus"  onClick={handleMinus}>-</div>
            <div className="products-info__Quantity-btn-counter" >{counter}</div>
            <div className="products-info__Quantity-btn-plus"  onClick={handlePlus}>+</div>
          </div>
        </div>
        <button className="product__info-btn" onClick={handleAddvart}>
          Add to card
          <i className="products__info  fa-solid fa-cart-shopping"></i>
        </button>
      </footer>
      
      <p className="products__info-info">{products?.description}</p>
    </article>
  );
};

export default productsInfo;
