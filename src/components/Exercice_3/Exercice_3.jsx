import "./style.css";

import React from 'react'

function Product() {

    const products = [
        { id: 1, name: "Pomme", price: 0.50, promo: true, picture: "src/assets/img/pomme.png" },
        { id: 2, name: "Orange", price: 1, promo: false, picture: "src/assets/img/orange.png" },
        { id: 3, name: "Banane", price: 1.50, promo: false, picture: "src/assets/img/banane.png" }
    ]

    return (
        <>
            {products.map(product => <ProductCard key={product.id} nom={product.name} prix={product.promo} />)}
        </>
    )
}

export default Product;