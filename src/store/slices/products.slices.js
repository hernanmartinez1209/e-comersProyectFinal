import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const productSlices = createSlice({
    name:'product',
    initialState:null,
    reducers:{
        setProductusGlobal: ( state ,action) =>action.payload
    }
})
export const {setProductusGlobal}  = productSlices.actions

export default productSlices.reducer

export const getAllProducts = () => (dispatch) =>{
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    axios.get(url, getConfig())
    .then(res=> dispatch(setProductusGlobal(res.data.data.products)) )
    .catch(err => console.log(err))
}