import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionProd = collection(db, "productos")
        const docRef = doc(collectionProd, id)
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setProducto({
                        id: res.id,
                        ...res.data()
                    })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (invalid) {
        return <div className='invalid'>
            <h3>El producto no existe</h3>
            <Link to='/' className='btn btn-primary'> Volver al inicio</Link>
        </div>
    }

    return (
        <div className="titleContainer">
            {loading
                ? <Loader />
                : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
