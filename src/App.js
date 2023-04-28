import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/testimonio'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
        imagen='1'
        name='Josh'
        city='Houston'
        job='web developer'
        company='AOL'
        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
      />

       <Testimonio
        imagen='2'
        name='Karina'
        city='LA'
        job='Java developer'
        company='Yahoo'
        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
      />

        <Testimonio
        imagen='3'
        name='Alice'
        city='New York'
        job='Javascript developer'
        company='Amazon'
        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
      />
      </div>
      
    </div>
  );
}

export default App;
