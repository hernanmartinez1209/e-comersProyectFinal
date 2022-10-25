import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../utils/getConfig'
import CartPurchase from './CartPurchase'

const Purchases = () => {
    const [purchasess, setPurchasess] = useState()
    //  const [purchases, setPurchases] = useState()
    
     useEffect(() => {
       const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
       axios.get(URL, getConfig())
         .then(res => setPurchasess(res.data.data.purchases))
         .catch(err => console.log(err))
     }, [])
  return (
    <div>Purchases
      <div>
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