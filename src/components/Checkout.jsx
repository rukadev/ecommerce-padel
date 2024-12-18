import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import toast, { Toaster } from 'react-hot-toast'

const imputsVacios = () => toast.error('Los campos son obligatorios', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    duration: 2000,
})

const email = () => toast.error('El email debe coincidir', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    duration: 2000,
})


const enviandoFormulario = () => toast.loading('Enviando formulario...', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
})

const compraExitosa = () => toast.success('Compra realizada con éxito', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    duration: 2000,
})


const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)
    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.nombre || !user.apellido || !user.email || !user.direccion) {
            imputsVacios()
        } else if (user.email !== validate) {
            email()
        } else {
            const loadingToast = enviandoFormulario()
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "compras")
            addDoc(ventas, order)
                .then((res) => {
                    cart.forEach((item) => {
                        const docRef = doc(db, "productos", item.id)
                        getDoc(docRef)
                            .then((dbDoc) => {
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad })
                            })
                    })
                    setOrderId(res.id)
                    clear()
                    toast.dismiss(loadingToast)
                    compraExitosa()
                })
                .catch((error) => {
                    toast.dismiss(loadingToast)
                    toast.error('Hubo un error en el proceso de compra')
                    console.log(error)
                })
        }
    }

    return (
        <div>
            <Toaster
                position="bottom-right"
                reverseOrder={false} />
            {orderId !== ''
                ? <div className='orden-contain'>
                    <div>
                        <h4>Generaste bien tu orden!</h4>
                        <h5>Tu id de compra es: <span>{orderId}</span></h5>
                    </div>
                    <Link to='/' className='btn btn-primary'> Volver al inicio</Link>
                </div>
                :
                <div className='form-contain'>
                    <h4>Completa tus datos para finalizar la compra</h4>
                    <Form onSubmit={finalizarCompra} className='form'>
                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                            <fieldset>
                                <legend>Informacion basica</legend>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="John" name='nombre' onChange={userData} />
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Doe" name='apellido' onChange={userData} />
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" name='direccion' onChange={userData} />
                            </fieldset>
                            <fieldset>
                                <legend>Informacion de contacto</legend>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder='ejemplo@gmail.com' onChange={userData} />
                                <Form.Label>Confirme su email</Form.Label>
                                <Form.Control type="email" name='segundo-email' onChange={(e) => setValidate(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu correo electrónico con nadie más.
                                </Form.Text>
                            </fieldset>
                        </Form.Group>
                        <div className='boton-submit'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            }
        </div>
    )
}

export default Checkout
