import { useState } from "react";

export default function EliminarRepetits() {
  let vectorInt = [1, 29, 2, 2, 14, 39, 1];
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
    <div id="eliminarrepetits">
      VELL Array: {JSON.stringify(vectorInt)}
      <br />
      <button>Eliminar Repetits</button>
      NOU Array:
      {JSON.stringify(inserir(vectorInt, valor, posicio))}
    </div>
  );
}
