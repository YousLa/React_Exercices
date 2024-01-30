import { useState } from "react";
import "./style.css";

const Calculatrice = () => {

    // Inputs et leur valeur par défaut
    const [inputs, setInputs] = useState({ numberOne: '', operator: 'addition', numberTwo: '', result: '' })

    const sendForm = (e) => {
        // On annule l'évènement par défaut du formulaire
        e.preventDefault();
        // TODO | récuperer les valeurs et effectué l'opération

        switch (inputs.operator) {
            case "+":
                setInputs({
                    // On récupère toutes les propriétés présentes dans l'objet inputes
                    ...inputs,
                    result: inputs.numberOne + inputs.numberTwo
                })
                break;

            case "-":
                setInputs({
                    // On récupère toutes les propriétés présentes dans l'objet inputes
                    ...inputs,
                    result: inputs.numberOne - inputs.numberTwo
                })
                break;

            case "*":
                setInputs({
                    // On récupère toutes les propriétés présentes dans l'objet inputes
                    ...inputs,
                    result: inputs.numberOne * inputs.numberTwo
                })
                break;

            case "/":
                setInputs({
                    // On récupère toutes les propriétés présentes dans l'objet inputes
                    ...inputs,
                    result: inputs.numberOne / inputs.numberTwo
                })
                break;

            default:
                break;
        }
    }

    const changeValue = (e) => {

        const { value, type, name } = e.target;

        setInputs({
            // On récupère toutes les propriétés présentes dans l'objet inputes
            ...inputs,
            [name]: value
            //Pour la propriété dont le nom est égal à celui de l'élément html récupéré, on vérifie si c'est un input type checkbox, si oui, on prend l'attribut checked, sinon value
        })

    }

    return (
        <>
            {/* Formulaire */}
            <form onSubmit={sendForm}>

                {/* Number One */}
                <div>
                    <label htmlFor="numberOne"> Nombre 1 : </label>
                    <input type="text" name="numberOne" id="numberOne" value={inputs.numberOne} onChange={changeValue} />
                </div>

                {/* Opérateur */}
                <div>
                    <label htmlFor="operator"> Opérateur : </label>
                    <select name="operator" id="operator" value={inputs.operator} onChange={changeValue}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                </div>

                {/* Number Two*/}
                <div>
                    <label htmlFor="numberTwo"> Nombre 2 :</label>
                    <input type="text" name="numberTwo" id="numberTwo" value={inputs.numberTwo} onChange={changeValue} />
                </div>

                {/* Bouton Submit */}
                <div>
                    <input type="submit" value="Envoyer" />
                </div>

                {/* Résultat */}
                <div>
                    <label htmlFor="result">Résultat : </label>
                    <input type="text" name="result" id="result" value={inputs.result} readOnly />
                </div>

            </form>
        </>
    );
}

export default Calculatrice;