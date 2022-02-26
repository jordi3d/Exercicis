import "./RellotgeAnalogic.css";
import { useState } from "react";

export default function RellotgeAnalogic() {
  const [clicked, setClicked] = useState(true);

  function dia_i_hora() {
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
    return (
      <div className={clicked ? "mostra_watch" : "amaga_watch"}>
        {days[nomdia] + ", " + dia}
        {mes === 4 || mes === 8 || mes === 10 ? " d'" : " de "}
        {months[mes] + " de " + any} <br />
        {hora + ":" + min + ":" + sec}
      </div>
    );
  }

  return (
    <div id="rellotgeanalogic">
      <h1>RELLOTGE ANALÒGIC</h1>
      <br />
      <br />
      <br />
      <div className="pastilleta2">
        {dia_i_hora() && setInterval(() => clicked, 1000)}
      </div>
      <br />
      <button onClick={() => setClicked(!clicked)}>TOGGLE RELLOTGE</button>
    </div>
  );
}
