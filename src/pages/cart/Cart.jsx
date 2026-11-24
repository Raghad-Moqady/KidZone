import React from 'react'
import useCart from '../../hooks/useCart.js'

export default function Cart() {
  const {data}= useCart();
  console.log(data.cartProducts);
  console.log(data.cartTotal);

  return (
    <div>
      Cart 
    </div>
  )
}
