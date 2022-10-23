import React, { useState } from 'react'
import '../styles/sliderimgs.css'

const SliderImgs = ({products}) => {

    const [indexImg, setIndeXImg] = useState(0)

    const handlePrev = () => {
        if(indexImg - 1 < 0){
            setIndeXImg(products.productImgs.length - 1)
        }else{
            setIndeXImg(indexImg - 1)
        }
    }

    const handleNext = () => {
        if(indexImg + 1 > products.productImgs.length - 1 ){
            setIndeXImg(0)
        }else{
            setIndeXImg(indexImg + 1)
        }
    }


  return (
    <div className='slider'>
        <button onClick={handlePrev} className='slider__prev'>&#60;</button>
        <div className='slider__static'>
            <div style={{transform: `translateX(calc(-${indexImg} / 3 * 100%))`}} className='slider__move'>
                {
                    products.productImgs.map(url => (
                        <div key={url} className='slider__img-container'>
                            <img className='slider__img' src={url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        <button onClick={handleNext} className='slider__next'>&#62;</button>
    </div>
  )
}

export default SliderImgs