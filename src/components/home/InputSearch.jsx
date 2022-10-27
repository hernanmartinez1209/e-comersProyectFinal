import React from 'react'
import stylesInput from'../styles/stylesInput.css'

const InputSearch = ({setInputText,inputText }) => {
    const handleChange = e =>{
        setInputText(e.target.value)
    }
  return (
    <div className='container__inputSearch'>
      <h3 className=' title__inputSearch'>Search</h3>
    <input className='inputSearch' value={inputText} onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch