import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../components/styles/stylesLogin.css'

const LoginScreen = () => {
    
 const {handleSubmit ,register ,reset} = useForm()
 const [isLogged, setIsLogged] = useState(false)

const submit  = data =>{
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL ,data)
    .then(res =>{
        console.log(res.data)
    localStorage.setItem('token',res.data.data.token)
    setIsLogged(true)
    })
    .catch(err => console.log(err))

}
useEffect(() => {
  if(localStorage.getItem('token')){
    setIsLogged(true)
  } else {
    setIsLogged(false)
  }
}, [])

const handleLogout = () => {
  localStorage.removeItem('token')
  setIsLogged(false)
}

if(isLogged) {
  return (
    <div>
      <h2>User Logged ✅</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


  return (
    <div className="container__login">
      <section className="box__login">
      <h3 className="title__login"> Welcome! Enter your email and password to continue </h3>
        <p className="smg__login">You have to Log In to access to your cart</p>

      <article className="test__login">
        <h4 className="test__login-title"><i className="fa-solid fa-user-lock"></i>Test Data</h4>
        <ul className="container__test-data">
          <li className="data__test-email"><i className="fa-solid fa-square-envelope"></i><span>hernanmartinezg18@gmail.com</span></li>
          <li className="data__test-password"><i className="fa-solid fa-unlock-keyhole"></i><span>pass1238975</span></li>
        </ul>
      </article>
      <form className="from__login" onSubmit={handleSubmit(submit)}>
        <div className="container_input__login-email">
          <label htmlFor="eamil">Email</label>
            <input className="input__login-email" type="email" id="email" {...register('email')} />
          
        </div>
        <div className="container_input__login-password">
          <label htmlFor="password">Password</label>
            <input className="input__login-password" type="password" id="password" {...register('password')} />
          
        </div>
        <button className="btn__login">loguin</button>
      </form>
      </section>
    </div>
  );
};

export default LoginScreen;
