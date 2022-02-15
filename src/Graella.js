import "./Graella.css";
//import { useState } from "react";

export default function Graella() {
  //const [counter, setCounter] = useState(0);
  let fotos = [
    "https://placeimg.com/240/120",
    "https://placeimg.com/240/180",
    "https://placeimg.com/200/200",
    "https://placeimg.com/120/120",
    "https://placeimg.com/400/400",
    "https://placeimg.com/300/300",
  ];
  function fesclick(index) {
    let tmp = index.n;
    let finestra = window.open(tmp, `target = "_blank"`);
    if (finestra.onClick()) finestra = window.close();
    return false;
  }

  function imgList(photos) {
    console.log(photos);
    return (
      <>
        {photos.map((n) => (
          <div className="foto">
            <a href={n} onClick={() => fesclick({ n })}>
              <img key={n} src={n} alt={n} width="120" height="90" />
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
