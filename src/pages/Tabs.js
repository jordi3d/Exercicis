import "./Tabs.css";
import { useState } from "react";

export default function Tabs() {
  const [clicked, setClicked] = useState(0);
  let text_clicked = ["Contingut1", "Contingut2"];

  return (
    <div id="tabs">
      <div id="botonetsTab">
        <div
          className={clicked === 0 ? "clicatTabA" : "noclicatTab"}
          onClick={() => setClicked(0)}
        >
          Tab1
        </div>
        <div
          className={clicked === 1 ? "clicatTabB" : "noclicatTab"}
          onClick={() => setClicked(1)}
        >
          Tab2
        </div>
      </div>
      <div id="text_outputTabs">{text_clicked[clicked]}</div>
    </div>
  );
}
