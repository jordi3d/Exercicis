import "./RellotgeAnalogic.css";

export default function RellotgeAnalogic() {
  function dia_i_hora() {
    const d = new Date();
    let hora_graus = (d.getHours() % 12) * 30;
    let min_graus = d.getMinutes() * 6;
    let sec_graus = d.getSeconds() * 6;
    return (
      <div className="mostra_watch">
        <div>
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
      </div>
    );
  }

  return (
    <div id="rellotgeanalogic">
      <h1>RELLOTGE ANALÒGIC</h1>
      <br />
      <div className="pastilleta2">{dia_i_hora()}</div>
    </div>
  );
}
