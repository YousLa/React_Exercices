ProductCard = ({ name, picture, price, promo }) => {

    return (
        <div>
            <h4>{name}</h4>
            <img src={picture} alt={name} />
            {promo ?
                (<p className="promo">{price} €</p>)
                :
                (<p>{price} €</p>)
            }

        </div>
    )
}