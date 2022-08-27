import React from 'react'
import quotes from "../quotes.json"
import '../App.css'

const QuoteBox = ({colors, index, card, arrColor}) => {
    
    
    return ( 
        <div className='card' >
            <h1><i class="fa-solid fa-quote-left"></i>{quotes[index].quote}</h1>
            <button style={{background:arrColor[colors]}} onClick={card}><i class="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default QuoteBox;