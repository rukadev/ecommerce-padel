import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({ prod }) => {
    const { removeItem } = useCart()
    return (
        <div className='cart-item-cont'>
            <div className='cart-item'>
                <img src={prod.img} alt={prod.nombre} />
                <div className='cart-item-info'>
                    <span>${prod.precio}</span>
                    <span>Unid: {prod.cantidad}</span>
                    <span>Total ${prod.cantidad * prod.precio}</span>
                    <span>{prod.marca}</span>
                </div>
            </div>
            <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Borrar</button>
        </div>
    )
}

export default CartItem
