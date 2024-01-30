import { useState } from "react";
import "./Exercice6.css"

const Exercice6 = () => {
    const [inputs, setInputs] = useState({ lastname: "", firstname: "", birthdate: "", backend: "nodejs", frontend: "html", comment: "", love: false });

    const [errors, setErrors] = useState({ lastname: false, birthdate: false })

    const [presentation, setPresentation] = useState((<>[... en attente ...]</>))

    const changeValue = (e) => {
        const { name, checked, value } = e.target

        setErrors({
            ...errors,
            [name]: (name === 'birthdate') ? errorMinor(value) : errorRequired(value),
        })


        setInputs({
            ...inputs, //Toutes les valeurs de l'objet
            //PLUS celui qu'on veut modifier
            //Pour l'input dont l'attribut name est égal à love, on met la propriété checked (puisque checkbox) sinon, on met la prop value
            [name]: (name === "love") ? checked : value
        })
    }

    const errorRequired = (inputValue) => {
        return inputValue.trim() === '' //renvoie false si input rempli, sinon renvoie vrai
    }

    const errorMinor = (inputValue) => {
        const todayYear = new Date().getFullYear();
        const birthdayYear = new Date(inputValue).getFullYear();
        return todayYear - birthdayYear <= 18 // Si la personne à moins de 18 ans, on renvoie true
    }

    const showPresentation = (e) => {
        e.preventDefault();

        const todayYear = new Date().getFullYear();
        const birthdayYear = new Date(inputs.birthdate).getFullYear();

        setPresentation((<>
            <p>Bonjour, je m'appelle {inputs.firstname} {inputs.lastname}, j'ai {todayYear - birthdayYear} ans cette année.</p>
            <p>Ma technologie BackEnd favorite est {inputs.backend} et la FrontEnd est {inputs.frontend}</p>
            <p>Voici mes commentaires sur la formation : "{inputs.comment}"</p>
            {(inputs.love) ? (<p>J'aime trop la formation !</p>) : (<p>Envie de caner !</p>)}
        </>))

    }

    return (
        <>
            <div className="flex-row">
                <div className="w-45">
                    <form onSubmit={showPresentation} className="flex-col">
                        <input name="lastname" type="text" placeholder="Nom" value={inputs.lastname} onChange={changeValue} />
                        {errors.lastname && (<span>Ce champs est requis !</span>)}

                        <input name="firstname" type="text" placeholder="Prénom" value={inputs.firstname} onChange={changeValue} />

                        <input name="birthdate" type="date" value={inputs.birthdate} onChange={changeValue} />
                        {errors.birthdate && (<span>Vous devez être majeur !</span>)}

                        <select name="backend" value={inputs.backend} onChange={changeValue}>
                            <option value="nodejs">NodeJs</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                        </select>

                        <select name="frontend" value={inputs.frontend} onChange={changeValue}>
                            <option value="html">HTML</option>
                            <option value="css">CSS/SCSS</option>
                            <option value="js">JavaScript</option>
                        </select>

                        <textarea name="comment" placeholder="Votre commentaire" value={inputs.comment} onChange={changeValue} />

                        <div>
                            <input name="love" id="love" type="checkbox" value={inputs.love} onChange={changeValue} />
                            <label htmlFor="love">❤ La formation</label>
                        </div>

                        <button>Valider</button>
                    </form>
                </div>

                <div className="w-45 flex-col">
                    {presentation}
                </div>

            </div>
        </>
    )
}

export default Exercice6;
