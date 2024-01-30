import { useForm } from "react-hook-form";
import { useState } from "react";
import "./style.css";

const Form2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const watchFields = watch(["firstname", "lastname", "birthdate", "backend", "frontend", "comment", "like"]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstname">Nom : </label>
                <input type="text" {...register("firstname")} />
            </div>

            <div>
                <label htmlFor="lastname">Prénom : </label>
                <input type="text" {...register("lastname")} />
            </div>

            <div>
                <label htmlFor="birthdate">Date de naissance : </label>
                <input type="date" {...register("birthdate")} />
            </div>

            <div>
                <label htmlFor="backend">Back-End : </label>
                <select {...register("backend")}>
                    <option value="NodeJs">NodeJs</option>
                    <option value="C#">C#</option>
                    <option value="Java">Java</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                </select>
            </div>

            <div>
                <label htmlFor="frontend">Front-End : </label>
                <select {...register("frontend")}>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>

            <div>
                <label htmlFor="comment">Commentaire : </label>
                <textarea {...register("comment")} cols="30" rows="10" />
            </div>

            <div>
                <input type="checkbox" {...register("like")} />
                <label>❤️ La formation</label>
            </div>

            <div>
                <input type="submit" value="Valider" />
            </div>

            {submitted && (
                <div>
                    <p>
                        Bonjour, je m'appelle {watchFields[0]} {watchFields[1]}, j'ai {calculateAge(watchFields[2])} ans cette année.
                        Ma technologie back-end est {watchFields[3]} et ma technologie front-end préférée est {watchFields[4]} !
                        Voici mes commentaires sur la formation : {watchFields[5]}.
                        {watchFields[6] ? (<span>J'aime trop la formation ❤️</span>) : (<span>Je n'aime pas la formation 💔</span>)}
                    </p>
                </div>
            )}
        </form>
    );
}

export default Form2;