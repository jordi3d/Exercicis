import { useState } from "react";

export default function AfegirElement() {
  let vectorInt = [1, 29, 46, 2, 14, 39, 5];
  const [posicio, setPosicio] = useState();
  const [valor, setValor] = useState();

  function canviavalor(ident, valornou) {
    if (ident === 1)
      if (valornou === "") setValor();
      else setValor(Number(valornou));
    else if (ident === 2)
      if (valornou === "") setPosicio();
      else setPosicio(Number(valornou));
  }
  function inserir(vector, val, pos) {
    let arr1 = [];
    let arr2 = [];
    let vector2 = [];
    if (val === undefined || pos === undefined) return vector;
    if (pos > vector.length || pos < 0) {
      alert("Posició d'array incorrecte! Valors entre 0 i " + vector.length);
      setPosicio();
      return vector;
    }
    arr1 = vector.slice(0, pos);
    arr2 = vector.slice(pos, vector.length);
    arr1.push(val);
    vector2 = arr1.concat(arr2);
    return vector2;
  }
  return (
    <div id="afegirelement">
      VELL Array: {JSON.stringify(vectorInt)}
      <br />
      ELEMENT Nou:
      <input
        placeholder="Entra un número"
        id="valinput"
        type="number"
        value={valor}
        onChange={(event) => canviavalor(1, event.target.value)}
      ></input>
      <br />
      Posició on inserir:
      <input
        placeholder={"Número entre 0 i " + vectorInt.length}
        id="posinput"
        type="number"
        value={posicio}
        onChange={(event) => canviavalor(2, event.target.value)}
      ></input>
      <br />
      NOU Array:
      {JSON.stringify(inserir(vectorInt, valor, posicio))}
      <br />
      Valor:{valor}
      <br />
      Posició:{posicio}
    </div>
  );
}
