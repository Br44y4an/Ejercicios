import { useState } from "react";
import "./App.css";

function App() {
  // estados
  const [numero, setNumero] = useState(0);
  const [entrada, setEntrada] = useState("");

  // funciones
  const aumentarContador = () => {
    setNumero(numero + 1);
  };

  const disminuirContador = () => {
    setNumero(numero - 1);
  };

  const setearContadorAEntrada = (e: any) => {
    e.preventDefault();
    parseInt(entrada);
    setNumero(parseInt(entrada));
  };

  const handleInput = (e: any) => {
    setEntrada(e.target.value);
  };

  return (
    <form onSubmit={setearContadorAEntrada}>
      <div style={{ display: "flex", width: "50%", justifyContent: "space-between", margin: "auto" }}>
        <button type="reset" onClick={disminuirContador}>
          -1
        </button>
        <p style={{ fontSize: 24 }}>{numero}</p>
        <button type="reset" onClick={aumentarContador}>
          +1
        </button>
      </div>

      <div style={{ display: "flex", width: "50%", justifyContent: "space-between", margin: "auto", marginTop: 5 }}>
        <input type="number" value={entrada} onChange={handleInput} />
        <button type="submit">Setear</button>
      </div>
    </form>
  );
}

export default App;
