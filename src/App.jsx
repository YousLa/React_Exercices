import './App.css'
import FichePerson from './components/Exercice_1/Exercice_1'
import Animal from './components/Exercice_2/Exercice_2'
import Product from './components/Exercice_3/Exercice_3'

import Compteur from './components/Exercice_4/Exercice_4'
import Exercice4 from './components/Exercice_4/Correction_04/Exercice4'
import Calculatrice from './components/Exercice_5/Exercice_5'
import Form from './components/Exercice_6/Exercice_6'
import Form2 from './components/Exercice_7/Exercice_7'

import ToDoList from './components/Exercice_8/ToDoList'

function App() {

  return (
    <>
      <div className='app_container'>

        {/* exercice 1 */}
        {/* <FichePerson name="Yousra" age={27} /> */}

        {/* Exercice 2 */}
        {/* <Animal hasAnAnimal={false} />
        <Animal hasAnAnimal={true} type="chien" />
        <Animal hasAnAnimal={true} type="chat" name="Lola" /> */}

        {/* Exercice 3 */}
        {/* <Product /> */}

        {/* Exercice 4 */}
        {/* <Compteur /> */}

        {/* Correction Exercice 4 */}
        {/* Exercice 4 - Le state */}
        {/* <Exercice4 increment={2} />
        <Exercice4 increment={6} />
        <Exercice4 /> */}

        {/* Exercice 5 */}
        {/* <Calculatrice /> */}

        {/* Exercice 6 - Formulaire */}
        {/* <Form /> */}

        {/* Exercice 7 - Formulaire React Hook Form */}
        {/* <Form2 /> */}

        {/* Exercice 8 */}
        <ToDoList />

      </div>
    </>
  )
}

export default App
