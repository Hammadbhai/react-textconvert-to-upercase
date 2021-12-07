import './App.css';
// import React, { showAlert } from 'react';
// import Navbar from './components/Navbar';
import Textfoam from './components/Textfoam';
// import About from './components/About';
// import Alert from './components/Alert';
let currentdate = new Date(2020,5,5, 14);
currentdate = currentdate.getHours();
let greet = '';
const cssstyle = {};

if (currentdate >= 1 && currentdate <= 12) {
    greet = "Good Morning"
    cssstyle.color = "green"
}else if (currentdate >= 12 && currentdate <= 19) {
  greet = "Good Evening "
  cssstyle.color = "orange"
}else{
  greet = "Good Night"
  cssstyle.color = "purple"
}

function App() {



  return (
   <>
    <h1>Heelo Sir, <span style={cssstyle}>{greet}</span></h1>

   <Textfoam />
   </>
  );
}

export default App;
