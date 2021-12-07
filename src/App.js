import './App.css';
import React, { showAlert } from 'react';
import Navbar from './components/Navbar';
import Textfoam from './components/Textfoam';
import About from './components/About';
import Alert from './components/Alert';


function App() {



  return (
    
  
   <>
      <Navbar title="hammad" />
     <Alert alert={Alert} />
   <Textfoam />
   </>






  );
}

export default App;
