import React, { useState } from 'react';
import './App.css';


function App() {
  
  const [contador, getContador] = useState(0);
  
  const actualizarState = e =>{
    let num = e.target.value;
    // console.log(num.length);
    getContador(parseInt(num.length));

  }    

    return (
      <div className="container">
        <textarea rows="3"
          onChange={actualizarState}
        ></textarea>
        <div className="counter">{contador}</div>
      </div>
    );
  
}

export default App;
