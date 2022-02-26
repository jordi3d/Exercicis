import "./TipCalculator.css";
import { useState } from "react";

export default function TipCalculator() {
  const [totalazo, setTotalazo] = useState(0);

  function calcula() {
    let tmp = document.getElementById("preu").value;
    let tmp2 = document.getElementById("propina").value;
    let tmp3 = document.getElementById("arrodoniment").checked;
    let tmp4 = document.getElementById("comensals").value;
    let tmp5;
    if (tmp3)
      tmp5 = Math.round(
        (parseFloat(tmp) * (1.0 + parseFloat(tmp2) / 100)) / parseFloat(tmp4)
      );
    else
      tmp5 = (
        (parseFloat(tmp) * (1.0 + parseFloat(tmp2) / 100)) /
        parseFloat(tmp4)
      ).toFixed(2);
    setTotalazo(tmp5);
  }
  return (
    <div id="tipcalculator">
      <h1>TIP CALCULATOR</h1>
      <br />
      <label>Preu:</label>
      <input
        id="preu"
        type="number"
        name="preu"
        onChange={() => calcula()}
      ></input>
      <br />
      <label>Propina:&nbsp;</label>
      <input
        id="propina"
        type="number"
        initial-value="20"
        onChange={() => calcula()}
      ></input>
      %
      <br />
      <p id="total">
        Total:
        <span id="totalfactura">
          <u>&nbsp;{totalazo}&nbsp;</u>
        </span>
      </p>
      <label>Arrodoniment&nbsp;</label>
      <input
        id="arrodoniment"
        type="checkbox"
        onChange={() => calcula()}
      ></input>
      <br />
      <label>Comensals:&nbsp;</label>
      <input
        id="comensals"
        min="1"
        max="10"
        type="number"
        onChange={() => calcula()}
      ></input>
    </div>
  );
}
