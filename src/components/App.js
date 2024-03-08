
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("");
  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text"  onKeyUp={(event)=>setMessage(`Hello ${event.target.value}!`)}/>
        <p>{message}</p>
    </div>
  );
}

export default App
