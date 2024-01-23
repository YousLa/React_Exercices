const ProductCard = ({ nom, prix, promo }) => {
    return (
        <div>
            <p>{nom}</p>

            {promo ?
                (<p className="promo">{prix} €</p>)
                :
                (<p>{prix} €</p>)
            }

            {/* <p className={ promo ? "promo" : ""}>{prix} €</p> */}
            {/* <p className={ promo && "promo"}>{prix} €</p> */}

            {/* <p>{nom} <span className={ promo && "promo"}> {prix} €</span></p> */}

        </div>
    )
}

export default ProductCard;