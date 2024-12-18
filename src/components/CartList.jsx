import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartList = () => {
  const { cart, cartTotal, clear } = useCart()
  const clearCart = () => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar todo?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Eliminado!",
          text: "Su carrito ha sido eliminado.",
          icon: "success",
        })
        clear();
      }
    });
  }

  return (
    <div className='cart-contain-cart'>
      {cart.map((prod) => <CartItem prod={prod} key={prod.id} />)}
      <div className='cart-list-cont'>
        <h5 className='monto-total-carrito'>Total a pagar <span>${cartTotal()}</span></h5>
        <div className='cart-list-end'>
          <button className='btn btn-danger' onClick={clearCart}>Borrar carrito</button>
          <Link to={'/checkout'} className='btn btn-success'>Terminar compra</Link>
        </div>
      </div>
    </div>
  )
}

export default CartList
