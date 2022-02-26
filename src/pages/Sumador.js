import "./Sumador.css";
import { useState } from "react";

export default function Sumador() {
  const [totalito, setTotalito] = useState(0.0);
  function sumeta() {
    let tmp = document.getElementById("entrada").value;
    let tmp2 = parseFloat(parseFloat(tmp) + totalito);
    setTotalito(tmp2);
  }
  return (
    <div id="sumador">
      <h1>SUMADOR</h1>
      <br />
      <label>Valor:&nbsp;</label>
      <input id="entrada" type="number" name="valor"></input>
      <br />
      <p>
        Total:&nbsp;<u>&nbsp;{totalito}&nbsp;</u>
      </p>
      <br />
      <br />
      <button onClick={() => sumeta()}>&nbsp;SUMA&nbsp;</button>
    </div>
  );
}
