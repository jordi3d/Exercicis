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
  const [amaga, setMostra] = useState("amaga");
  let puntets = [
    ["puntas", "punt", "punt", "punt", "punt", "punt"],
    ["punt", "puntas", "punt", "punt", "punt", "punt"],
    ["punt", "punt", "puntas", "punt", "punt", "punt"],
    ["punt", "punt", "punt", "puntas", "punt", "punt"],
    ["punt", "punt", "punt", "punt", "puntas", "punt"],
    ["punt", "punt", "punt", "punt", "punt", "puntas"],
  ];

  function fwd() {
    imatge < fotos.length - 1 ? setImatge(imatge + 1) : setImatge(0);
  }
  function rew() {
    imatge ? setImatge(imatge - 1) : setImatge(fotos.length - 1);
  }
  function vesa(quina, destaca) {
    if (imatge !== quina) setImatge(quina);
  }
  return (
    <div
      id="carrusel"
      onMouseOver={() => setMostra("mostra")}
      onMouseOut={() => setMostra("amaga")}
      style={{ backgroundImage: "url('" + fotos[imatge] + "')" }}
    >
      <div id="anterior" className={amaga} onClick={() => rew()}>
        &lt;
      </div>
      <div id="seguent" className={amaga} onClick={() => fwd()}>
        &gt;
      </div>
      <div id="separador"></div>
      <div id="navegador" className={amaga}>
        {fotos.map((n, index) => (
          <div
            key={n}
            className={puntets[imatge][index]}
            onClick={() => vesa(index, n)}
          ></div>
        ))}
      </div>
    </div>
  );
}
