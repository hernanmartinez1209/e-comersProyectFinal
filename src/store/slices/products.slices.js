import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const productSlices = createSlice({
    name:'product',
    initialState:null,
    reducers:{
        setProductusGlobal: ( state ,action) =>action.payload,
        upProducts: (state) =>{
         state.sort((a, b) => +a.price - +b.price)
        },
        donwProducts: (state) =>{
            state.sort((a, b) => +b.price - +a.price)
        }
    }
})
export const {setProductusGlobal , upProducts ,donwProducts}  = productSlices.actions

export default productSlices.reducer

export const getAllProducts = () => (dispatch) =>{
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    axios.get(url, getConfig())
    .then(res=> dispatch(setProductusGlobal(res.data.data.products)) )
    .catch(err => console.log(err))
}
export const getAllProductsBycategory = (id) => (dispatch) =>{
    
    const url =`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`  
    return axios.get(url)
    .then(res=> dispatch(setProductusGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}