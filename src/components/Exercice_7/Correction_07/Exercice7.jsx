// 1) Installer la librairie dans le projet : npm i react-hook-form

// https://github.com/jquense/yup -> Yup : Librairie qui permet de faire des schémas de validation d'objets

import { useForm } from "react-hook-form";
import "./Exercice7.css"
import { useState } from "react";

const Exercice6Bis = () => {
    // { mode = ""} // Pour savoir le mode d'update du formulaire pour les erreurs, la validation etc 
    // onBlur -> Quand on va quitter les inputs (le plus utilisé)
    // onChange -> Dès qu'on va modifier l'input
    const { register, watch, formState: { errors, isValid }, handleSubmit } = useForm({ mode: "onChange" })
    // register -> remplace value={} onChange={} -> une fonction qui fait en tâche de fond le binding des inputs et de l'event onChange
    // handleSubmit -> Fonction qui fait pour nous e.preventDefault() et qui récupère tous les champs et renvoie un objet avec chaque champs = une propriété
    // formState :
    //errors -> contient toutes les erreurs du formulaire
    //errors.nomChamps -> Boolean pour savoir si y'a erreur ou non (sans savoir quelle heure c'est)
    //errors.nomChamps.type == "nomErreur" -> Savoir quelle erreur en particulier
    //isValid -> Boolean qui permet de savoir si le formulaire (en général est valide ou non)
    //watch : Pour pouvoir "watch" (regarder) la valeur d'un des champs en dehors de la fonction appelée avec handleSubmit qui elle connait data, mais pas le reste du composant

    const [presentation, setPresentation] = useState((<>[...en attente...]</>))


    const showPresentation = (data) => {
        console.log(data);
        //data : Objet crée par la fonction handleSubmit de useForm

        const todayYear = new Date().getFullYear();
        const birthdayYear = new Date(data.birthdate).getFullYear();

        setPresentation((<>
            <p>Bonjour, je m'appelle {data.firstname} {data.lastname}, j'ai {todayYear - birthdayYear} ans cette année.</p>
            <p>Ma technologie BackEnd favorite est {data.backend} et la FrontEnd est {data.frontend}</p>
            <p>Voici mes commentaires sur la formation : "{data.comment}"</p>
            {(data.love) ? (<p>J'aime trop la formation !</p>) : (<p>Envie de caner !</p>)}
        </>))
    }

    return (
        <>
            <div className="flex-row">
                <div className="w-45">
                    <form onSubmit={handleSubmit(showPresentation)} className="flex-col">
                        <input type="text" placeholder="Nom" {...register("lastname", { required: true, maxLength: 50 })} />
                        {errors.lastname?.type == "required" && (<span className="error">Ce champs est requis</span>)}
                        {errors.lastname?.type == "maxLength" && (<span className="error">Longueur autorisée : 50 caractères</span>)}
                        <span>{watch("lastname")}</span>

                        <input type="text" placeholder="Prénom" {...register("firstname", { required: true, maxLength: 50 })} />

                        <input type="date" {...register("birthdate", { required: true })} />
                        {errors.birthdate && (<span className="error">Ce champs est requis</span>)}

                        <select {...register("backend", { required: true })}>
                            <option value="nodejs">NodeJs</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                        </select>

                        <select {...register("frontend", { required: true })} >
                            <option value="html">HTML</option>
                            <option value="css">CSS/SCSS</option>
                            <option value="js">JavaScript</option>
                        </select>

                        <textarea {...register("comment", { maxLength: 500 })} placeholder="Votre commentaire" />

                        <div>
                            <input {...register("love")} id="love" type="checkbox" />
                            <label htmlFor="love">❤ La formation</label>
                        </div>

                        <button disabled={!isValid}>Valider</button>
                    </form>
                </div>

                <div className="w-45 flex-col">
                    {presentation}
                </div>

            </div>
        </>
    )
}

export default Exercice6Bis;
