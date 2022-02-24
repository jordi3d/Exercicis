import { useState } from "react";

export default function Concatenar() {
  let arrayA = ["A0", "A1", "A2", "A3", "A4", "A5", "A6"];
  let arrayB = ["B0", "B1", "B2", "B3", "B4", "B5", "B6"];
  const [nou, setNou] = useState([]);

  function concatena() {
    let tmp = [];
    for (let i = 0; i < arrayA.length; i++) {
      tmp.push(arrayA[i]);
      tmp.push(arrayB[i]);
    }
    setNou(tmp);
    return;
  }
  return (
    <div id="concatenar">
      arrayA: {JSON.stringify(arrayA)}
      <br />
      arrayB: {JSON.stringify(arrayB)}
      <br />
      <button onClick={() => concatena()}>CONCATENAR</button>
      <br />
      NOU: {JSON.stringify(nou)}
    </div>
  );
}
