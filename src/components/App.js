
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("");
  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" onChange={e => setName(e.target.value)}/>
        <p>{name && name.length>0?"Hello"+name+"!":""}</p>
    </div>
  );
}

export default App
