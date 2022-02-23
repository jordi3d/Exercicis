import { useState } from "react";

export default function AfegirElement() {
  let vectorInt = [1, 29, 46, 2, 14, 39, 5];
  let valor1, posicio1;
  const [posicio, setPosicio] = useState();
  const [valor, setValor] = useState();

  function getvalor(element) {
    let ident = "";
    if (element === 1) {
      ident = "valinput";
    } else if (element === 2) {
      ident = "posinput";
    } else ident = "no funciona";
    let tmp = document.getElementById(ident);
    if (tmp) {
      if (element === 1) {
        setValor(Number(tmp.value));
      } else {
        setPosicio(Number(tmp.value));
      }
      return true;
    } else return true;
  }
  function inserir(vector, val, pos) {
    let arr1 = [];
    let arr2 = [];
    let vector2 = [];
    if (val === undefined || pos === undefined) return vector;
    if (pos > vector.length || pos < 0) {
      alert("Posició d'array incorrecte!");
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
        onBlur={() => getvalor(1)}
      ></input>
      <br />
      Posició on inserir:
      <input
        placeholder={"Número entre 0 i " + vectorInt.length}
        id="posinput"
        type="number"
        onBlur={() => getvalor(2)}
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
