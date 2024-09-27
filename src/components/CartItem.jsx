import React from 'react'
import { currencyFormatter } from '../util/formatting'

const CartItem = ({
    name, 
    quantity, 
    price,
    onIncreace,
    onDecrease,
  }) => {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncreace}>+</button>
        </p>
    </li>
  )
}

export default CartItem
