import "./style.css";

const ProductCard = ({ name, price, promo, picture }) => {

    return (
        <div className="products_container">
            <img src={picture} alt={name} className="product_img" />
            <h4>{name}</h4>
            {promo ?
                (<p className="product_promo">{price} €</p>)
                :
                (<p>{price} €</p>)
            }

        </div>
    )
}

export default ProductCard;