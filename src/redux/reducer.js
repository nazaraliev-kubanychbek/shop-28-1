import {createReducer, createAction} from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () =>{
    return (dispatch) =>{
        let action = createAction(GET_CATEGORIES);
        axios('https://fakestoreapi.com/products/categories')
        .then(({data})=> dispatch(action(data)))
    }
}

const initialState = {
   categories: [],
}

export default createReducer(initialState, (builder)=>{
    builder
    .addCase(GET_CATEGORIES, (state, action)=>{
        state.categories = action.payload
    })
})
