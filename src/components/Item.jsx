import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Item({ product }) {
    return (
        <Card border="light" className='card'>
            <Card.Img variant="top" src={product.img} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>
                    {product.marca}
                </Card.Text>
                <Card.Text>
                    ${product.precio}
                </Card.Text>
                <Button as={Link} to={`/item/${product.id}`} variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;