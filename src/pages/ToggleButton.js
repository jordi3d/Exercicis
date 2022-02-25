import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [clicked, setClicked] = useState(false);
  let text_clicked = ["Clicat", "No Clicat"];

  return (
    <div id="togglebutton">
      <button
        className={clicked ? "clicat" : "noclicat"}
        onClick={() => setClicked(!clicked)}
      >
        CLICK-ME!
      </button>
      <p>{text_clicked[clicked ? 0 : 1]}</p>
    </div>
  );
}
