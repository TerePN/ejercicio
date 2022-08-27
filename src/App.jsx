import React,{ useState } from 'react'
import quotes from "./quotes.json"
import QuoteBox from './components/QuoteBox'
import './App.css'



function App() {

  const randomIndex= Math.floor(Math.random()* quotes.length);
  const [index, setIndex]= useState(randomIndex);
    
    const chenge=() => {
    const randomIndex=Math.floor(Math.random()* quotes.length);
    setIndex(randomIndex);}


  const colors= ["#A47EE2","#F17ACB", "#FFA47E", "#B0A8B9", "#008B74", "#FFD7FF"];

  const randomColor= Math.floor(Math.random()* colors.length)
  document.body.style=`background: ${colors[randomColor]}; color:${colors[randomColor]}`

  return (
    <div className="App">
      <QuoteBox colors={randomColor} index= {index} card={chenge} arrColor={colors}/> 
    </div>
  )
}

export default App
