import "./ToggleableSideBar.css";
import { useState } from "react";

export default function ToggleableSideBar() {
  const [clicked, setClicked] = useState(true);

  return (
    <div id="toggleablesidebar">
      <div id="boto" onClick={() => setClicked(!clicked)}>
        <svg viewBox="9 0 10 8" width="115" height="8">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        id="sidebar"
        style={{
          animation: clicked
            ? "slidein 0.6s linear 0s 1 normal forwards"
            : "slideout 0.6s linear 0.2s 1 normal forwards",
        }}
      ></div>
    </div>
  );
}
