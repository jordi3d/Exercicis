import { useState } from "react";

export default function AfegirElement() {
  let vectorInt = [1, 29, 46, 2, 14, 39, 5];
  const [posicio, setPosicio] = useState(null);
  const [valor, setValor] = useState(null);

  function getvalor(element, valor_element) {
    let ident = "";
    if (element === 1) {
      ident = "valinput";
    } else if (element === 2) {
      ident = "posinput";
    }
    let tmp = document.getElementById(ident);
    if (tmp) {
      if (element === 1) {
        setValor(valor_element);
      } else {
        setPosicio(valor_element);
      }
      console.log("Valor: ", ident, " = ", valor_element);
      return true;
    } else return true;
  }
  function inserir(vector, val, pos) {
    let arr1 = [];
    let arr2 = [];
    let vector2 = [];
    if (!val) return vector;
    if (pos > vector.length || pos < 0) {
      alert("Posició d'array incorrecte!");
      return vector;
    }
    arr1 = vector.slice(0, pos);
    arr2 = vector.slice(pos, vector.length - 1);
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
        onChange={() => getvalor(1, valor)}
      ></input>
      <br />
      Posició on inserir:
      <input
        placeholder={"Número entre 0 i " + (vectorInt.length - 1)}
        id="posinput"
        onChange={() => getvalor(2, posicio)}
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
