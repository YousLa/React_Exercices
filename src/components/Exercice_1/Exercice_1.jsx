import PropTypes from 'prop-types';

import style from './style.module.css';

const FichePerson = (props) => {
    //! Destructuring 
    // Pour pouvoir récupérer chacune des propriétés de l'objet props dans une variable, plutôt qu'écrire à chaque fois props.name, props.age

    const { name, age } = props;

    return (
        <div>
            <p className={style.title}>Bienvenue {name} sur l'application React !</p>
            <p className={style.grey}>Vous avez {age} ans !</p>
        </div>
    )
}

// Définition des valeurs par défaut
//nomComposant.defaultProps = {}
FichePerson.defaultProps = {
    age: 18
}

//Définition des types pour les props :
//? C'est un outil de développement, ça ne vous empêchera pas de mettre n'importe quoi dans les props mais ça vous mettra un warning dans la console

//! Attention la propriété de notre composant s'appelle FichePerson sans majuscule à prop
//! Par contre, lorsqu'on définit le type, on va chercher la valeur dans l'objet PropTypes qu'on a extrait de la librairie (ligne 1) donc majuscule à P
FichePerson.propTypes = {
    //nomProp : typeAttendu
    name: PropTypes.string,
    age: PropTypes.number
}

export default FichePerson;