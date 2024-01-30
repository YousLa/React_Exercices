import { useState } from "react";

const Exercice5 = () => {
    const [nb1, setNb1] = useState("")
    const [operator, setOperator] = useState("+")
    const [nb2, setNb2] = useState("")
    const [res, setRes] = useState("")

    const calcul = (e) => {
        e.preventDefault(); //Pour ne pas envoyer le formulaire et refresh la page
        console.log("calcul");
        if (nb1 === '' || nb2 === '') {
            setRes("REMPLIR NB")
        }
        else {
            switch (operator) {
                case "+":
                    setRes(parseFloat(nb1.replace(',', '.')) + parseFloat(nb2.replace(',', '.')));
                    // setRes((+nb1.replace(',','.')) + (+nb2.replace(',','.')));
                    // Le + utilisé devant une chaine de caractères, va faire comme un parseFloat, pour des petits cast, il est pratique, attention qu'il est moins précis, à ne pas utiliser pour des calculs
                    break;
                case "-":
                    setRes(parseFloat(nb1.replace(',', '.')) - parseFloat(nb2.replace(',', '.')));
                    break;
                case "x":
                    setRes(parseFloat(nb1.replace(',', '.')) * parseFloat(nb2.replace(',', '.')));
                    break;
                case "/":
                    if (parseFloat(nb2.replace(',', '.')) !== 0) {
                        setRes(parseFloat(nb1.replace(',', '.')) / parseFloat(nb2.replace(',', '.')));
                    }
                    else {
                        setRes("!! DIV 0 !!")
                    }
                    break;
                default:
                    setRes("OPERATOR INVALID")
                    break;
            }
        }
    }

    return (
        <>
            <form onSubmit={calcul} >
                {/* onSubmit est l'évènemet qui se déclenche quand on clique sur un button submit */}

                <input type="text" placeholder="Nb1" value={nb1} onChange={(e) => { setNb1(e.target.value) }} />
                {/* value={nb1} -> Pour 'binder' (relier) notre variable nb1 à l'input */}
                {/* onChange={(e) => { setNb1(e.target.value)}} -> pour 'binder' l'évènement change de l'input à la méthode qui nous permet de changer la valeur de nb1 (en lui passant la valeur dans l'input (e.target.value))*/}

                <select value={operator} onChange={(e) => { setOperator(e.target.value) }}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="/">/</option>
                </select>

                <input type="text" placeholder="Nb2" value={nb2} onChange={(e) => { setNb2(e.target.value) }} />

                <button /*disabled={ nb1 === "" || nb2 === "" }*/>=</button>
                {/* Par défault, si on ne précise pas le type du button, s'il est dans un formulaire, c'est un type submit */}

                <input type="text" placeholder="Résultat" value={res} readOnly />
                {/* readOnly -> La valeur dans le champs peut changer mais pas via l'utilisateur, seulement par le programme (react mettra un warning si on bind value sans mettre readOnly ou onChange) */}
            </form>
        </>

    )
}

export default Exercice5;
