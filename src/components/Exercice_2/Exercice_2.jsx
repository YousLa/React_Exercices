import "./style.css";
import Chat from "../../assets/img/chat.png";
import Chien from "../../assets/img/chien.png";

const Animal = (props) => {
    const { hasAnAnimal, name, type } = props;

    if (!hasAnAnimal) {
        return (
            <>
                <div className="animal_container">
                    <h3>Oh, vous n'avez pas d'animal 😭</h3>
                    <p> <a href="#">Voulez-vous en adopter un ?</a></p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="animal_container">
                <h3>Vous possédez un petit compagnon 🐈🐕</h3>
                <p>Son petit nom est : {name || "Pas de nom renseigné"}</p>
                {
                    (type == "chat") ?
                        (<img src={Chat} alt="Chat" className="animal_type_img" />)
                        :
                        (<img src={Chien} alt="Chien" className="animal_type_img" />)
                }
            </div>
        </>
    )
}

export default Animal;