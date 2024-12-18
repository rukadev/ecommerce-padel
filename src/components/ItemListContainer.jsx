import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsCollection = categoria
            ? query(collection(db, "productos"), where("categoria", "==", categoria))
            : collection(db, "productos")

        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProducts(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoria])

    return (
        <div className="titleContainer">
            {loading
                ? <Loader />
                : <div>
                    <h1>{greeting}</h1>
                    <h2 className="span-categoria">{categoria}</h2>
                    <ItemList products={products} />
                </div>}
        </div>
    )
}

export default ItemListContainer