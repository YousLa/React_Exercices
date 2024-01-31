// * Composant parents

import { useForm } from "react-hook-form";
import "./style.css"
import { useState } from "react";
import Liste from "./Liste";
import { v4 as uuid } from "uuid";

const ToDoList = () => {

    // Formulaire
    const {
        register,
        watch,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur",
        defaultValues: { priority: "basse" }
    });

    // Tableau de tâches
    const [list, setList] = useState([]);

    // Ajouter une tâche
    const addToList = (data) => {
        const newTask = { id: uuid(), ...data }
        setList([...list, newTask]);
        reset();
        console.log(list);
    }

    // Supprimer une tâche
    const onDeleteTask = (taskId) => {
        setList(list.filter(task => task.id !== taskId));
    }

    // Terminer la tâche
    const [finished, setFinished] = useState(false);

    const handleFinishedTask = () => {
        setFinished(true);
    }

    return (

        <>
            {/* Formulaire */}
            <h1>Ajouter une nouvelle tâche</h1>

            <form onSubmit={handleSubmit(addToList)}>
                {/* Obligatoire */}
                <label htmlFor="name">Nom : </label>
                <input type="text" {...register("name", { required: true, maxLength: 50 })} />
                {errors.name?.type == "required" && (<span>Ce champs est requis</span>)}
                {errors.name?.type == "maxLength" && (<span className="error">Longueur autorisée : 50 caractères</span>)}

                {/* Optionnel */}
                <label htmlFor="description">Description : </label>
                <textarea type="text" {...register("description", { maxLength: 300 })} />
                {errors.name?.type == "maxLength" && (<span className="error">Longueur autorisée : 300 caractères</span>)}

                <select {...register("priority")} >
                    <option value="basse">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                </select>

                <button disabled={!isValid}>Ajouter</button>

            </form>
            {/* {JSON.stringify(list)} */}

            {/* Liste des tâches */}

            <div>
                {list.map(task => (<Liste key={task.id} task={task} onDeleteTask={onDeleteTask} onFinishtask={handleFinishedTask} />))}
            </div>
        </>

    )
}

export default ToDoList;