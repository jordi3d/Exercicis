import "./Carrusel.css";
import { useState } from "react";

export default function Carrusel() {
  const [zooming, setZooming] = useState(true);
  function amagamenus() {
    let tmp1 = document.getElementById("anterior");
    let tmp2 = document.getElementById("seguent");
    tmp1.style.display = "none";
    tmp2.style.display = "none";
  }
  function mostramenus() {
    let tmp1 = document.getElementById("anterior");
    let tmp2 = document.getElementById("seguent");
    tmp1.style.display = "block";
    tmp2.style.display = "block";
    return true;
  }
  return (
    <div id="carrusel">
      <div id="anterior">&lt;</div>
      <img
        id="foto"
        src="./img/imatge1.png"
        alt="imatge #1"
        onMouseOver={() => mostramenus()}
        onMouseOut={() => amagamenus()}
      />
      <div id="seguent">&gt;</div>
      <div id="separador"></div>
      <div id="navegador">· · o · · </div>
    </div>
  );
}
