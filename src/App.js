import logo from './logo.svg';
import './App.css';
import Header from "./Components/Layout/Header";
import Wrappercontainer from './Components/Layout/Wrappercontainer';
import Description from './Components/Layout/Description';
import React, { useState, Component } from 'react';
const NUMBER_OF_ARRAY_BARS = 50;
function App() {
  //var algorithm = "none";
  const [algorithm, setAlgorithm] = useState('');
  const [Numberarray, setNumberarray] = useState('');
  const changeAlgorithmtype = (value) => {
    setAlgorithm(value);
    console.log(value);
  }
  
  const sendarrhandler = (array) => {
    setNumberarray(array);
  }
  const resetArray=()=> {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 410));
    }
    setNumberarray(array);
  }
  return (
    <div className="App">
      <Header onChangeAlgo={changeAlgorithmtype} onSendarr={sendarrhandler} onResetarr={ resetArray}  />
      <Wrappercontainer type={algorithm} arr={Numberarray } />
      <Description type={algorithm} />
    </div>
  );
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default App;
