import { useState } from 'react'
import "./style.css";

const Form = () => {

    const [inputs, setInputs] = useState({ firstname: '', lastname: '', birthdate: '', backend: 'NodeJs', frontend: 'JavaScript', comment: '', like: false });

    const [submitted, setSubmitted] = useState(false);

    const sendForm = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const changeValue = (e) => {
        const { checked, value, type, name } = e.target;

        setInputs({
            ...inputs,
            [name]: (type === 'checkbox') ? checked : value
        });
    };

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth;
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <>

            <form onSubmit={sendForm} >

                <div>
                    <label htmlFor='firstname'>Nom : </label>
                    <input type="text" name='firstname' id='firstname' value={inputs.firstname} onChange={changeValue} />
                </div>

                <div>
                    <label htmlFor='lastname'>Prénom : </label>
                    <input type="text" name='lastname' id='lastname' value={inputs.lastname} onChange={changeValue} />
                </div>

                <div>
                    <label htmlFor="birthdate">Date de naissance : </label>
                    <input type="date" name='birthdate' id='birthdate' onChange={changeValue} />
                </div>

                <div>
                    <label htmlFor="backend">Back-End : </label>
                    <select name="backend" id="backend" value={inputs.backend} onChange={changeValue}>
                        <option value="NodeJs">NodeJs</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="PHP">PHP</option>
                        <option value="Python">Python</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="frontend">Front-End : </label>
                    <select name="frontend" id="frontend" value={inputs.frontend} onChange={changeValue}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comment">Commentaire : </label>
                    <textarea name="comment" id="comment" cols="30" rows="10" value={inputs.comment} onChange={changeValue}></textarea>
                </div>

                <div>
                    <input type="checkbox" name='like' id='like' value={inputs.like} onChange={changeValue} />
                    <label htmlFor="like">❤️ La formation</label>
                </div>

                <div>
                    <input type="submit" value="Valider" />
                </div>

            </form>

            {submitted && (
                <div>
                    <p>Bonjour, je m'appelle {inputs.lastname} {inputs.firstname}, j'ai {calculateAge(inputs.birthdate)} ans cette année. Ma technologie back-end est {inputs.backend} et ma technologie front-end préférée est {inputs.frontend} ! Voici mes commentaires sur la formation : {inputs.comment}. {inputs.like ? (<span>J'aime trop la formation ❤️</span>) : (<span>Je n'aime pas la formation 💔</span>)}</p>
                </div>

            )}

        </>
    )
}

export default Form