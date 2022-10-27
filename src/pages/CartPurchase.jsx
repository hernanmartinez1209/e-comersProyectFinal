import React from 'react'

const CartPurchase = ({purchase}) => {
    console.log(purchase);
  return (
    <article>
        <header>{purchase.updatedAt}</header>
       
     <div>
    {
        purchase.cart.products.map(product =>(

            <section className='cart__purchase' key={product.id}>
                <h3>{product.title}</h3>
                <span>{product.productsInCart.quantity}</span>
                <span>{product.price}</span>
            </section>
        ))
    }
    </div>    
    </article>
  )
}

export default CartPurchase