export const myCartReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]};
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(c => c.id!==action.payload.id)
            };
        case "INCREMENT_QUANTITY":
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              ),
            };
        case "DECREMENT_QUANTITY":
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: Math.max(1, item.qty - 1) }
                  : item
              ),
            };
        default:
            return state;
    }
}