import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsBycategory } from '../../store/slices/products.slices'
import stylesCategoryFilter from'../styles/stylesCategoryFilter.css'
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
    <aside className='contain__Category'>
        <h2 className='title__category'>category</h2>
        <div>
            <li className='all__Category' onClick={handleClickAllProdutcs} >All products</li>
            {
                categorys?.categories.map( categorie =>(
                    <ul className='box-list__category' key={categorie.id}> 
                        <li className='list-category' onClick={() => handleClickCategory(categorie.id)} >{categorie.name}</li>
                    </ul>
                ))
            }
             
        </div>

    </aside>
  )
}

export default CategoriFilter