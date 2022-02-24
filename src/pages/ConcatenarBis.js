import { useState } from "react";

export default function ConcatenarBis() {
  let arrayA = ["A0", "A1", "A2", "A3", "A4", "A5", "A6"];
  let arrayB = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7"];
  const [nou, setNou] = useState([]);

  function concatenabis() {
    let tmp = [];
    let lA = arrayA.length;
    let lB = arrayB.length;
    let l = lA >= lB ? lA : lB;

    for (let i = 0; i < l; i++) {
      if (i < lA) tmp.push(arrayA[i]);
      if (i < lB) tmp.push(arrayB[i]);
      console.log(i);
    }
    setNou(tmp);
    return;
  }
  return (
    <div id="concatenarbis">
      arrayA: {JSON.stringify(arrayA)}
      <br />
      arrayB: {JSON.stringify(arrayB)}
      <br />
      <button onClick={() => concatenabis()}>CONCATENAR BIS</button>
      <br />
      NOU: {JSON.stringify(nou)}
    </div>
  );
}
