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
    <div id="comptadorWindow">
      <div id="botoDisp">{counter}</div>
      <button id="botoInc" onClick={() => incrementa(1)}>
        +1
      </button>
      <button id="botoDec" onClick={() => incrementa(-1)}>
        -1
      </button>
      <button id="botoMes5" onClick={() => incrementa(5)}>
        +5
      </button>
    </div>
  );
}
