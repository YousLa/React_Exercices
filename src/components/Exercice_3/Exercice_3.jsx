import "./style.css";
import ProductCard from "./ProductCard";

const Product = (props) => {

    const products = [
        { id: 1, name: "Pomme", price: 0.50, promo: true, picture: "src/assets/img/pomme.png" },
        { id: 2, name: "Orange", price: 1, promo: false, picture: "src/assets/img/orange.png" },
        { id: 3, name: "Banane", price: 1.50, promo: false, picture: "src/assets/img/banane.png" }
    ]

    return (
        <>
            {products.map(product => <ProductCard key={product.id} name={product.name} promo={product.promo} picture={product.picture} price={product.price} />)}
        </>
    )
}

export default Product;