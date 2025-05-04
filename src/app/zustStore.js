import { create } from "zustand";

const useCartStore = create(set=>({
    cart:[],
    addToCart : (productId) => set(state => ({
        cart : [productId, ...state.cart]
    })) 
}))

// const useCartStore = create(useStore);
export default useCartStore; 