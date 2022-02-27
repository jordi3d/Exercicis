import "./RellotgeDigital.css";
import { useState } from "react";

export default function RellotgeDigital() {
  const [clicked, setClicked] = useState(false);

  function dia_i_hora_digital() {
    const d = new Date();
    const months = [
      "gener",
      "febrer",
      "març",
      "abril",
      "maig",
      "juny",
      "juliol",
      "agost",
      "setembre",
      "octubre",
      "novembre",
      "desembre",
    ];
    const days = [
      "diumenge",
      "dilluns",
      "dimarts",
      "dimecres",
      "dijous",
      "divendres",
      "dissabte",
    ];
    let nomdia = d.getDay();
    let any = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let hora = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);
    let sec = ("0" + d.getSeconds()).slice(-2);
    let tmp = document.getElementById("rellotgetd");
    let txt1 = "<div>" + days[nomdia] + ", " + dia;
    let txt2 = mes === 4 || mes === 8 || mes === 10 ? " d'" : " de ";
    let txt3 = months[mes] + " de " + any + "<br/>";
    let txt4 = hora + ":" + min + ":" + sec + "</div>";
    tmp.innerHTML = txt1 + txt2 + txt3 + txt4;
    /*return (
      //<div className={clicked ? "mostra_clock" : "amaga_clock"}>
      <div>
        {days[nomdia] + ", " + dia}
        {mes === 4 || mes === 8 || mes === 10 ? " d'" : " de "}
        {months[mes] + " de " + any} <br />
        {hora + ":" + min + ":" + sec}
      </div>
      //</div>
    );*/
  }

  return (
    <div id="rellotgedigital">
      <h1>RELLOTGE DIGITAL</h1>
      <br />
      <br />
      <div className="pastilleta">
        <div
          id="rellotgetd"
          className={clicked ? "mostra_clock" : "amaga_clock"}
        ></div>
      </div>
      <br />
      <button
        onClick={() => {
          setInterval(() => {
            dia_i_hora_digital();
          }, 1000);
          setClicked(!clicked);
        }}
      >
        TOGGLE RELLOTGE
      </button>
    </div>
  );
}
