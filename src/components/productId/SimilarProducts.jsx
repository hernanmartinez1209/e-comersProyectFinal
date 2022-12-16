import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartProducts from '../home/CartProducts'
import stylesSimilar from '../styles/stylesSimilar.css'

const SimilarProducts = ({products}) => {
    const [categoris, setCategoris] = useState()
    const [idCategories, setIdCategories] = useState()
    const [similarCategory, setSimilarCategory] = useState()
    useEffect(() => {
        const url ='https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(url)
        .then(res => setCategoris(res.data.data.categories))
        .catch(err => console.log(err))
      }, [])
      useEffect(() => {
          if (categoris && products ) {
              const cb = category => category.name === products.category
              setIdCategories(categoris.filter(cb)[0].id)  
            }
            
        }, [categoris , products])
        console.log(idCategories);

  useEffect(() => {
    if (idCategories) {
      
      const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${idCategories}`
      axios.get(URL)
      .then(res => setSimilarCategory(res.data.data.products))
      .catch(err=> console.log(err))
    }
  }, [idCategories])
  console.log(similarCategory);
  
  return (
    <div>
       <h2 className='similar__title'>Discover similar product</h2>
       <div className='similar__cart-product'>
        {
          similarCategory?.map(prod =>{

            if (products.id !== prod.id) {
              return <CartProducts key={prod.id}  product={prod} />
              
            }
          })
        }
       </div>
    </div>
  )
}

export default SimilarProducts