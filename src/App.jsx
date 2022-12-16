
// import axios from 'axios'
// import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductsId from './pages/ProductsId'
import ProtectecRoutes from './pages/ProtectecRoutes'
import Purchases from './pages/Purchases'
// import getConfig from './utils/getConfig'

function App() {
  // useEffect(() => {
  //   const url =`https://ecommerce-api-react.herokuapp.com/api/v1/cart`
  //   const url = `https://e-commerce-api.academlo.tech/api/v1/cart`
  //   axios.get(url ,getConfig())
  //   .then(res => console.log(res.data))
  //   .catch(err =>console.log(err))
  //  }, [])
  
  // useEffect(() => {
  
  //   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`
    // const url = `https://e-commerce-api.academlo.tech/api/v1/users`
  //   const data = {
  //     firstName: 'Hernan',
  //     lastName: 'Morazan',
  //     email: 'hernanmartinezg18@gmail.com',
  //     password: 'pass1238975',
  //     phone: '1234567891',
  //     role: 'admin'
  //   }


  //   axios.post(URL ,data)
  //  .then(res => console.log(res.data))
  //  .catch(err => console.log(err))
  // }, [])
  
 
  return (
    <div className="App">
        <Header />    
        <Routes>
        <Route path='/' element={<Home />}/>  
        <Route  path='product/:id' element={<ProductsId />}/>
         <Route path='/login' element={<LoginScreen />}/>
        
        <Route element={<ProtectecRoutes />}>
         <Route path='/cart' element={<Cart />}/>  
         <Route path='/purchases' element={<Purchases />}/>  
        
        </Route>
        </Routes> 

    </div>
  )
}

export default App
