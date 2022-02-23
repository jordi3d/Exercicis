import "./Graella.css";
import { useState } from "react";

export default function Graella() {
  const [zooming, setZooming] = useState(true);
  let fotos = [
    "./img/imatge1.png",
    "./img/imatge2.jpeg",
    "./img/imatge3.jpeg",
    "./img/imatge4.jpeg",
    "./img/imatge5.jpeg",
    "./img/imatge6.jpeg",
  ];
  function fesclick(index) {
    zooming ? setZooming(false) : setZooming(true);
    let cadena = "img[src='" + index.n + "']";
    let tmp = document.querySelector(cadena);
    let desti = document.getElementById("Graella__zoom");
    tmp = "url(" + index.n + ")";
    if (zooming) {
      desti.style.backgroundImage = tmp;
      desti.style.visibility = "visible";
    }
    return true;
  }
  function tanca() {
    setZooming(true);
    let desti = document.getElementById("Graella__zoom");
    desti.style.backgroundImage = "url(https://via.placeholder.com/640x320)";
    desti.style.visibility = "hidden";
  }

  function imgList(photos) {
    return (
      <div id="Graella">
        <div id="Graella__zoom" onClick={tanca}></div>
        <div id="Graella__fons">
          {photos.map((n) => (
            <div
              className="Graella__foto"
              key={n}
              onClick={() => fesclick({ n })}
            >
              <img src={n} alt={n} width="200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <>{imgList(fotos)}</>;
}
