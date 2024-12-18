import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

const compraToast = () => toast.success('Producto agregado al carrito!', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    duration: 1000,
})

const ItemDetail = ({ producto }) => {
    const [compra, setCompra] = useState(false)
    const { addToCart, itemQuantity } = useCart()

    const onAdd = (cantidad) => {
        if (cantidad > 0) {
            let cartItem = {
                nombre: producto.nombre,
                img: producto.img,
                precio: producto.precio,
                stock: producto.stock,
                marca: producto.marca,
                id: producto.id
            }
            addToCart(cartItem, cantidad)
            setCompra(true)
            compraToast()
        }
    }

    const stockActualizado = producto.stock - itemQuantity(producto.id)

    return (
        <div className='card-contein'>
            <img src={producto.img} alt={producto.nombre} />
            <div className='card-detail'>
                <h1>Detalle del producto</h1>
                <p>Modelo {producto.nombre}</p>
                <p>Marca {producto.marca}</p>
                <p className='card-detail-precio'>${producto.precio}</p>
                {compra
                    ? <div className='btn-detail'>
                        <Link className='btn btn-primary' to='/'>Seguir comprando</Link>
                        <Link className='btn btn-success a' to='/cart'>Ir al carrito</Link>
                    </div>
                    : <ItemCount stock={stockActualizado} onAdd={onAdd} initial={1} />}
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false} />
        </div>
    )
}

export default ItemDetail
