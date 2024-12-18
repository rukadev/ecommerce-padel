import React from 'react'
import Item from './Item'

function ItemList({ products }) {
    return (
        <div className="item-list">
            {products.map((product) => <Item product={product} key={product.id}/>)}
        </div>
    );
}

export default ItemList;