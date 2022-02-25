import "./GroupButton.css";
import { useState } from "react";

export default function GroupButton() {
  const [clicked, setClicked] = useState(0);
  let text_clicked = ["cap", "A", "B", "C"];

  return (
    <div id="groupbutton">
      <div id="botonets">
        <button
          className={clicked === 1 ? "clicatA" : "noclicat"}
          onClick={() => (clicked === 1 ? setClicked(0) : setClicked(1))}
        >
          A
        </button>
        <button
          className={clicked === 2 ? "clicatB" : "noclicat"}
          onClick={() => (clicked === 2 ? setClicked(0) : setClicked(2))}
        >
          B
        </button>
        <button
          className={clicked === 3 ? "clicatC" : "noclicat"}
          onClick={() => (clicked === 3 ? setClicked(0) : setClicked(3))}
        >
          C
        </button>
      </div>
      <div id="separador"></div>
      <div id="text_output">{text_clicked[clicked]}</div>
    </div>
  );
}
