import "./Graella.css";
import { useState } from "react";

export default function Graella() {
  const [counter, setCounter] = useState(0);

  return (
    <div id="graellaWindow">
      <ul>
        <li>Donat un array amb URL de fotos, mostrar les fotos en graella</li>
        <li>En clicar un foto, mostrar-la en pantalla completa (avançat)</li>
        <li>En clicar la foto ampliada, mostrar la graella un altre cop</li>
      </ul>
    </div>
  );
}
