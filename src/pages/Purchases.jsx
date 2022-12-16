import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../utils/getConfig'
import CartPurchase from './CartPurchase'

const Purchases = () => {
    const [purchasess, setPurchasess] = useState()
    //  const [purchases, setPurchases] = useState()
    
     useEffect(() => {
       const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
       axios.get(URL, getConfig())
         .then(res => setPurchasess(res.data.data.purchases))
         .catch(err => console.log(err))
     }, [])
  return (
    <div>
      <h2>Purchases</h2>
      <div className='box__Purchases'>
        {
          purchasess?.map(purchase =>(
              <CartPurchase 
              key={purchase.id}
              purchase={purchase}
              />
          ))
        }
      </div>

    </div>
  )
}

export default Purchases