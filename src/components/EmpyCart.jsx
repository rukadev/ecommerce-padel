import React from 'react'
import { Link } from 'react-router-dom'

const EmpyCart = () => {
    return (
        <div className='cart-empy'>
            <h2>Lo sentimos, el carrito se encuentra vacio!</h2>
            <h4>Revisa nuestros productos y añadilos al carrito para poder comprar</h4>
            <Link to='/' className='btn btn-primary'> Ir a comprar</Link>
        </div>
    )
}

export default EmpyCart
