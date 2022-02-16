import "./Graella.css";
//import { useState } from "react";

export default function Graella() {
  //const [counter, setCounter] = useState(0);
  let fotos = [
    "./img/imatge1.png",
    "./img/imatge2.jpeg",
    "./img/imatge3.jpeg",
    "./img/imatge4.jpeg",
    "./img/imatge5.jpeg",
    "./img/imatge6.jpeg",
  ];
  function fesclick(index) {
    let tmp = index.n;
    let finestra = window.open(tmp, `target = "_blank"`);
    finestra.onclick(this.close());
    return true;
  }

  function imgList(photos) {
    console.log(photos);
    return (
      <>
        {photos.map((n) => (
          <div className="foto" key={n}>
            <a href={n} onClick={() => fesclick({ n })}>
              <img src={n} alt={n} width="120" height="90" />
            </a>
          </div>
        ))}
      </>
    );
  }

  return (
    <div id="graellaWindow">
      {imgList(fotos)}
      {/*<ul>
        <li>En clicar un foto, mostrar-la en pantalla completa (avançat)</li>
        <li>En clicar la foto ampliada, mostrar la graella un altre cop</li>
      </ul>*/}
    </div>
  );
}
