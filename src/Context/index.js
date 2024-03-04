import React from 'react'

const CartContext = React.createContext({
  cartItems: [],
  isOrderPlaced: false,
  placeOrder: () => {},
  addCartItem: () => {},
  getQuantity: () => {},
  removeCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartContext
