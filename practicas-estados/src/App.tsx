import { useState } from "react";
import "./App.css";

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

function App() {
  // estados
  const [color, setColor] = useState(colors[0]);

  // funciones
  const changeColor = () => {
    setColor(colors[Math.floor(Math.random() * 7)]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ backgroundColor: color, width: 50, aspectRatio: 1 }} />
      <button onClick={changeColor}>Cambiar a color aleatorio</button>
    </div>
  );
}

export default App;
