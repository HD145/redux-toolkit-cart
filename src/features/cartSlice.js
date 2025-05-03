import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

const handleAddProduct = (state, action) => {
    const id = action.payload.id;
    const isProduct = state.products.findIndex(item => item?.id === id);
    if(isProduct !== -1){
        state.products[isProduct].quantity+=1;
    }else{
        const prod = {
            title:action.payload.title,
            price:action.payload.price,
            quantity:1,
            id:action.payload.id
        }
        state.products.push(prod);
    }
}

const cartSlice = createSlice({
    name:'cart',
    initialState, 
    reducers:{
        addProduct:handleAddProduct,
        // removeProduct:handleRemoveProduct,
        // deleteProduct:handleDeleteProduct
    }
})

export const {addProduct} = cartSlice.actions;

export default cartSlice.reducer;