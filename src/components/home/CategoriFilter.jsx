import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsBycategory } from '../../store/slices/products.slices'

const CategoriFilter = () => {
     const [categorys, setCategorys] = useState()
useEffect(() => {
    const url ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(url)
    .then(res => setCategorys(res.data.data))
    .catch(err => console.log(err))
}, [])
 console.log(categorys);
 const dispatch = useDispatch()
 const handleClickCategory = id =>dispatch(getAllProductsBycategory(id)) 
const products =useSelector(state => state.products)
console.log(products);

 const handleClickAllProdutcs = () =>dispatch(getAllProducts())
  return (
    <div>CategoriFilter
        <h2>category</h2>
        <div>
            <li onClick={handleClickAllProdutcs} >All products</li>
            {
                categorys?.categories.map( categorie =>(
                    <ul key={categorie.id}> 
                        <li  onClick={() => handleClickCategory(categorie.id)} >{categorie.name}</li>
                    </ul>
                ))
            }
             
        </div>

    </div>
  )
}

export default CategoriFilter