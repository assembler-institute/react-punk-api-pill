import React, { useReducer } from 'react';

const CartContext = React.createContext([]);

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

function reducer(state, action) { // action === { type: 'ADD_PRODUCT', payload: product };
  switch(action.type) {
    case ADD_PRODUCT:
      const product = action.payload;
      const beerIndex = state.findIndex(beer => beer.id === product.id);
      if (beerIndex < 0) {
        return [...state, { ...product, quantity: 1 }];
      }
      const beerToIncrement = { ...state[beerIndex], quantity: state[beerIndex].quantity + 1 }
      return [
        ...state.slice(0, beerIndex),
        beerToIncrement,
        ...state.slice(beerIndex + 1),
      ];
    case REMOVE_PRODUCT:
      const id = action.payload;
      return state.filter(product => product.id !== id);
  }
}

const CartContextProvider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(reducer, []);
  
  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  }

  const removeProductFromCart = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  }

  // const removeProductItemFromCart = (id) => {
  //   const beerIndex = cartProducts.findIndex(beer => beer.id === id);
  //   const beerToDecrement = { ...cartProducts[beerIndex], quantity: cartProducts[beerIndex].quantity - 1 }
  //   if (beerToDecrement.quantity === 0) {
  //     removeProductFromCart(id)
  //   } else {
  //     setCartProducts([
  //       ...cartProducts.slice(0, beerIndex),
  //       beerToDecrement,
  //       ...cartProducts.slice(beerIndex + 1),
  //     ])
  //   }
  // }

  return (
    <CartContext.Provider value={{
      cartProducts,
      onAddProduct: addProductToCart,
      onRemoveProduct: removeProductFromCart,
      // onRemoveProductItem: removeProductItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
export {
  CartContext
}