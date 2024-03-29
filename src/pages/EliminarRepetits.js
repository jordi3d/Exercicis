import { useState } from "react";

export default function EliminarRepetits() {
  let vectorInt = [0, 1, 29, 2, 2, 14, 39, 1];
  const [vector, setVector] = useState(vectorInt);

  function eliminar(vectorInput) {
    let nou = [];
    let l = vectorInput.length;
    let elem;
    let trobat = false;
    for (let i = 0; i < l; i++) {
      trobat = false;
      elem = vectorInput[i];
      for (let j = 0; j < l; j++) {
        if (elem === vectorInput[j]) {
          if (i !== j) trobat = true;
          break;
        }
      }
      if (!trobat) nou.push(elem);
    }
    setVector(nou);
    return;
  }
  return (
    <div id="eliminarrepetits">
      VELL Array: {JSON.stringify(vectorInt)}
      <br />
      <br />
      <button onClick={() => eliminar(vectorInt)}>Eliminar Repetits</button>
      <br />
      <br />
      NOU Array:
      {JSON.stringify(vector)}
    </div>
  );
}
