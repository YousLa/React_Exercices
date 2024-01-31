// Composant enfant

const Liste = (props) => {
    const { task, onDeleteTask, onFinishTask } = props

    return (

        <>
            <div className={`task ${finished ? "finished-task" : ""}`} >
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                <button onClick={() => { onFinishTask(task.id) }}>Terminer</button>
                <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
            </div>

        </>

    )
}

export default Liste;