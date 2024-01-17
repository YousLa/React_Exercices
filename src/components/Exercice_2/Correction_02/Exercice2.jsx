import dog from "../assets/images/dog.png"
import cat from "../assets/images/cat.png"


const Exercice2 = (props) => {
    const { havePet, name, type } = props;

    if (!havePet) {
        return (
            <div className="pet-card">
                <p>Oh vous ne possédez pas d'animal 😢</p>
                <a href="https://helpanimals.be/" target="_blank">Considérez l'adoption</a>
            </div>
        )
    }

    return (
        <div className="pet-card">
            <p>Vous possédez un petit compagnon 🐕🐈</p>
            {/* Le bon opérateur logique à utiliser ici est || */}
            {/* Affiche le name s'il existe OU l'alternative précisée */}
            <p>Son petit nom est : {name || "Pas de nom renseigné"}</p>

            {/* Rappel sur le && */}
            {/* Il est un peu à voir comme une ternaire dont on ne ferai que le true */}
            {/* Si name existe, affiche ce qu'il y a à droite des && */}
            {/* { (name) ? "Nom existe" : ""} */}
            {/* <p>Son petit nom est : { name && "Nom existe" }</p> */}
            {
                (type == "chien") ?
                    // ( <img src="src/assets/images/dog.png" alt="dog icon" /> )
                    (<img src={dog} alt="dog icon" />)
                    :
                    // ( <img src="src/assets/images/cat.png" alt="cat icon" /> )
                    (<img src={cat} alt="cat icon" />)
            }

            {/* Ou */}

            {/* <img src={ (type == "chien") ? "src/assets/images/dog.png" : "src/assets/images/cat.png" } alt="" /> */}
            {/* <img src={ (type == "chien") ? dog : cat } alt={ (type == "chien") ? "dog icon" : "cat icon"} /> */}
        </div>
    )

}

export default Exercice2;
