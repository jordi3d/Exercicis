import { useState } from "react";

export default function EliminarRepetits() {
  let vectorInt = [1, 29, 2, 2, 14, 39, 1];
  const [vector, setVector] = useState(vectorInt);

  function eliminar(vectorInput) {
    let nou = vectorInput[0];
    let l = vectorInput.length;
    let elem;
    console.log(vectorInput);
    for (let i = 1; i < l; i++) {
      elem = vectorInput[i];
      for (let j = nou.length; j >= 0; j--) if (elem !== nou[j]) nou[i] = elem;
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
