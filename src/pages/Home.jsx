
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from '../components/home/CartProducts'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slices'

const Home = () => {
  const  products = useSelector( state => state.products)
  const [inputText, setInputText] = useState('')
  const [filterByTetxt, setFilterByTetxt] = useState()
console.log(inputText);
 const dispatch =  useDispatch()
 useEffect(() => {
      dispatch(getAllProducts())
 }, [])
   

  useEffect(() => {
      
    
    if (inputText !== '') {
      const cb = product => product.title.toLowerCase().includes(inputText.toLocaleLowerCase().trim())
     setFilterByTetxt(products.filter(cb)) 
    }else{
      setFilterByTetxt(products)
    }
    // .then(res =>console.log(res.data))
  }, [inputText, products])
  console.log(filterByTetxt);
  

 // console.log(products);
  return (
    <main className='home'>
      <InputSearch 
      setInputText={setInputText}
      inputText={inputText}
      />
      <div className='home_container'>
        {
          filterByTetxt?.map(product =>(
                <CartProducts  key={product.id} 
                product={product}
                />
            ) )

        }

      </div>
    </main>
  )
}

export default Home