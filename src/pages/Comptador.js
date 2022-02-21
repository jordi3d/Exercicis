import "./Comptador.css";
import { useState } from "react";

export default function Comptador() {
  const [counter, setCounter] = useState(0);
  function incrementa(amount) {
    let tmp = counter + amount;
    if (tmp > 10 || tmp < 0) return;
    setCounter(tmp);
    return;
  }
  return (
    <div id="Comptador">
      <div id="Comptador__Disp">{counter}</div>
      <button id="Comptador__Inc" onClick={() => incrementa(1)}>
        +1
      </button>
      <button id="Comptador__Dec" onClick={() => incrementa(-1)}>
        -1
      </button>
      <button id="Comptador__Mes5" onClick={() => incrementa(5)}>
        +5
      </button>
    </div>
  );
}
