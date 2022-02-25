import "./Carrusel.css";
import { useState } from "react";

let fotos = [
  "/img/imatge1.png",
  "/img/imatge2.jpeg",
  "/img/imatge3.jpeg",
  "/img/imatge4.jpeg",
  "/img/imatge5.jpeg",
  "/img/imatge6.jpeg",
].map((f) => process.env.PUBLIC_URL + f);

export default function Carrusel() {
  const [imatge, setImatge] = useState(0);

  function fwd() {
    console.log("CLICK FWD: %d", imatge);
    let tmp1 = document.getElementById("carrusel");
    if (imatge < fotos.length - 1) {
      setImatge((n) => n + 1);
    } else setImatge(0);
    console.log("FWD %d", imatge);
    tmp1.style.backgroundImage = 'url("' + fotos[imatge] + '")';
  }
  function rew() {
    console.log("CLICK REW: %d", imatge);
    let tmp1 = document.getElementById("carrusel");
    if (imatge > 0) {
      setImatge((n) => n - 1);
    } else setImatge(fotos.length - 1);
    tmp1.style.backgroundImage = 'url("' + fotos[imatge] + '")';
  }
  function amagamenus() {
    let tmp1 = document.getElementById("anterior");
    let tmp2 = document.getElementById("seguent");
    let tmp3 = document.getElementById("navegador");
    tmp1.style.display = "none";
    tmp2.style.display = "none";
    tmp3.style.display = "none";
  }
  function mostramenus() {
    let tmp1 = document.getElementById("anterior");
    let tmp2 = document.getElementById("seguent");
    let tmp3 = document.getElementById("navegador");
    tmp1.style.display = "block";
    tmp2.style.display = "block";
    tmp3.style.display = "block";
  }
  return (
    <div
      id="carrusel"
      onMouseOver={() => mostramenus()}
      onMouseOut={() => amagamenus()}
    >
      <div id="anterior" onClick={() => rew()}>
        &lt;
      </div>
      <div id="seguent" onClick={() => fwd()}>
        &gt;
      </div>
      <div id="separador"></div>
      <div id="navegador">· · o · · {imatge}</div>
    </div>
  );
}
