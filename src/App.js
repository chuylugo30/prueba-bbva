import logo from './logo.svg';
import './App.css';
import Prueba from './components/mi-prueba'
import { useState } from 'react';

function App() {

  const [gobierno, setGobierno] = useState(null); // Esta es para setear el estado con el que va a iniciar

  const myApi = async () => { // AQUI ESTA LA API
    const apiGob = await fetch('https://api.datos.gob.mx/v2/Records');
    const apiGobJson = await apiGob.json()
    setGobierno(apiGobJson.results)
    console.log("esto trae la api", gobierno);
  }

  return (
    <div className="App">
      <header className="App-header">
      { gobierno ? (<Prueba gobierno={gobierno} setGobierno={setGobierno} />) : 
      (<> <h2>Bievenido a esta app de pruebas</h2>
       <button onClick={myApi}>Consumir Api</button> </>) }

      </header>
    </div>
  );
}

export default App;
