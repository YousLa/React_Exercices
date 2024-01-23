import { useState } from "react";

const Exercice4 = (props) => {
    const { increment } = props;

    //Crée la variable compteur avec comme valeur initiale 0 (compteur)
    //Crée la fonction qui va permettre de modifier notre variable (setCompteur)
    const [compteur, setCompteur] = useState(0);

    const add = () => {
        setCompteur(compteurAvant => compteurAvant + increment)
    }

    const reset = () => {
        setCompteur(0)
    }

    return (
        <>
            <h2>Exercice 4 - Le state</h2>
            <p>{compteur}</p>
            <button onClick={add}>➕</button>
            {/* {
                (compteur !== 0) ? (<button onClick={reset}>Reset</button>) : (<></>)
            } */}
            {(compteur !== 0) && (<button onClick={reset}>Reset</button>)}

        </>
    )
}

//Valeur par défaut de l'incrément si pas fourni : 1
Exercice4.defaultProps = {
    increment: 1
}


export default Exercice4;
