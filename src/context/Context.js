import { createContext, useContext, useReducer } from "react";
import { myCartReducer } from "./Reducers";
import { products } from "../utils/products";

const Cart = createContext();

const Context = ({children}) => {
    const [state,dispatch] = useReducer(myCartReducer,{
        products : products,
        cart : []
    });
  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}