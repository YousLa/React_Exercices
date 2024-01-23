import "./style.css";
import { useState } from "react";

const Compteur = () => {

    // Variable => count
    // Fonction de modification de la variable count => setCount
    // Valeur par défaut de la variable count => 1
    const [count, setCount] = useState(0);

    // Incrémentation de la valeur
    const addOne = (addedValue) => {
        addedValue = 1;
        setCount(count + addedValue);
    };

    // Reset de la valeur
    const reset = (event) => {
        console.log("J'ai cliqué sur le bouton reset");
        setCount(event.target.value = 0);
    };

    return (
        <>
            <div className="compteur">

                {/* Affichage du compteur */}
                <p>Compteur : {count}</p>

                {/* Bouton d'incrémentation */}
                <button onClick={addOne}>Rajouter 1</button>

                {/* Bouton de reset */}
                {
                    (count == 0) ?
                        ("")
                        :
                        (<button onClick={reset}>Reset</button>)
                }

            </div>
        </>
    )
}

export default Compteur;