import { useEffect } from "react";
import "./RellotgeAnalogic.css";

export default function RellotgeAnalogic() {
  function dia_i_hora() {
    const d = new Date();
    let sec_graus = d.getSeconds() * 6;
    let min_graus = (d.getMinutes() + d.getSeconds() / 60) * 6;
    let hora_graus =
      ((d.getHours() % 12) + d.getMinutes() / 60 + d.getSeconds() / 3600) * 30;
    let tmp = document.getElementById("rellotget");
    let txt1 =
      '<div className="mostra_watch"><div id="dotze">12</div><div id="tres">3</div><div id="sis">6</div><div id="nou">9</div><svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="gold"></circle><path id="hora" transform="rotate(';
    let txt2 =
      ' 50 50)" d="M50 50v-20" stroke="#000" stroke-width="5" stroke-linecap="round"/><path id="minut" transform="rotate(';
    let txt3 =
      ' 50 50)" d="M50 50v-35" stroke="#000" stroke-width="3" stroke-linecap="round"/><path id="segon" transform="rotate(';
    let txt4 =
      ' 50 50)" d="M50 50v-37" stroke="#000" stroke-width="1" stroke-linecap="round"/></svg></div>';
    tmp.innerHTML = txt1.concat(
      hora_graus.toString(),
      txt2,
      min_graus.toString(),
      txt3,
      sec_graus.toString(),
      txt4
    );
    /*return (
      <div className="mostra_watch">
        <div id="dotze">12</div>
        <div id="tres">3</div>
        <div id="sis">6</div>
        <div id="nou">9</div>
        <svg viewBox="0 0 100 100" width="120" height="120">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="1"
            fill="gold"
          ></circle>
          <path
            id="hora"
            transform={"rotate(" + hora_graus + " 50 50)"}
            d="M50 50v-20"
            stroke="#000"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            id="minut"
            transform={"rotate(" + min_graus + " 50 50)"}
            d="M50 50v-35"
            stroke="#000"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            id="segon"
            transform={"rotate(" + sec_graus + " 50 50)"}
            d="M50 50v-37"
            stroke="#000"
            stroke-width="1"
            stroke-linecap="round"
          />
        </svg>
      </div>
    );*/
  }
  useEffect(() => {
    setInterval(() => {
      dia_i_hora();
    }, 1000);
  }, []);
  return (
    <div id="rellotgeanalogic">
      <h1>RELLOTGE ANALÒGIC</h1>
      <div id="rellotget"></div>
    </div>
  );
}
