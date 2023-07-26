import React, { useState } from "react";
import "./App.css";

const App = () => {
  // let message = 'Hello Word!'
  const [message, setMessage] = useState('oi')
  return (
    <>
    <div className="container">{message}</div>
    <button onClick={() => setMessage("heloooooo")}>
      mudar mensagem
    </button>
    </>
  );
};

export default App;