import { useState } from "react";
import "./App.css";

function App() {
  // estados
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // funciones
  const addItem = () => {};

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
