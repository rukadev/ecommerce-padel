import React from 'react'
import { useCart } from '../context/CartContext'
import EmpyCart from './EmpyCart'
import CartList from './CartList'

const CartView = () => {
    const { cart } = useCart()
    return (
        <div>
            {!cart.length
                ? <EmpyCart />
                : <div className='cart-view'>
                    <h1>Productos agregados al carrito</h1>
                    <CartList />
                </div>
            }
        </div>
    )
}

export default CartView
