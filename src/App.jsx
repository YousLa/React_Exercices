import './App.css'
import FichePerson from './components/Exercice_1/Exercice_1'
import Animal from './components/Exercice_2/Exercice_2'
import Product from './components/Exercice_3/Exercice_3'

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
        <Product />
      </div>
    </>
  )
}

export default App
