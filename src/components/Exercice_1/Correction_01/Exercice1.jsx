import PropType from 'prop-types'

const Exercice1 = (props) => {
    // props, qu'on ajoute dans les paramètres, est un objet contenant toutes les valeurs passées lors de l'appel de notre composant (voir App.jsx ici)
    console.log(props.nom);
    console.log(props.age);
    console.log(props.pouet); //N'a pas été passé lors de l'appel donc n'existe pas

    // Une autre façon de récupérer les valeurs qui sont dans props, pour ne pas écrire props.montruc à chaque fois, c'est d'utiliser le destructuring
    const {nom, age} = props

    //#region Façon 1 avec props.truc
    // return (
    //     <>
    //         <h2>Exercice 1 - Créer son premier composant :</h2>
    //         <p>Bienvenue {props.nom} sur l'application React !</p>
    //         <p>Vous avez {props.age} ans !</p>
    //     </>
    // )
    //#endregion 

    return (
        <>
            <h2>Exercice 1 - Créer son premier composant :</h2>
            <p>Bienvenue {nom} sur l'application React !</p>
            <p>Vous avez {age} ans !</p>
        </>
    ) 
}

//Ajouter une valeur par défaut pour l'âge
Exercice1.defaultProps = {
    age : 18
}

//Ajouter la vérification des types 
//propTypes : proriété de notre composant permettant de définir les types
//PropType : objet venant du module prop-types contenant les types disponibles
Exercice1.propTypes = {
    nom : PropType.string,
    age : PropType.number
}

export default Exercice1;