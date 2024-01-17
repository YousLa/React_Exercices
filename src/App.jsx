import './App.css'
import FichePerson from './components/Exercice_1/Exercice_1'
import Animal from './components/Exercice_2/Exercice_2'

function App() {

  return (
    <>
      <div className='app_container'>
        <FichePerson name="Yousra" age={27} />
        <Animal hasAnAnimal={false} />
        <Animal hasAnAnimal={true} type="chien" />
        <Animal hasAnAnimal={true} type="chat" name="Lola" />
      </div>
    </>
  )
}

export default App
