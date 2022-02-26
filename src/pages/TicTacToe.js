import "./TicTacToe.css";
import { useState } from "react";

export default function TicTacToe() {
  const [propera, setPropera] = useState("X");
  const [partida, setPartida] = useState([
    { 0: "\xa0" },
    { 1: "\xa0" },
    { 2: "\xa0" },
    { 3: "\xa0" },
    { 4: "O" },
    { 5: "\xa0" },
    { 6: "\xa0" },
    { 7: "\xa0" },
    { 8: "\xa0" },
  ]);
  let joc = [
    { 0: "\xa0" },
    { 1: "\xa0" },
    { 2: "\xa0" },
    { 3: "\xa0" },
    { 4: "O" },
    { 5: "\xa0" },
    { 6: "\xa0" },
    { 7: "\xa0" },
    { 8: "\xa0" },
  ];
  function fae(tauler) {
    for (let i = 0; i < 3; i++) console.log(tauler[i][i]);
  }
  function clicadacasella(posicio, tauler) {
    if (partida[posicio][posicio] === "\xa0") {
      propera === "O" ? setPropera("X") : setPropera("O");
      tauler[posicio][posicio] = propera;
      console.log("tauler: ", JSON.stringify(tauler));
      setPartida(tauler);
      fae(partida);
    } else alert("clica una casella buida");
  }
  return (
    <div id="tictactoe">
      <h1>3 en ratlla</h1>
      <div id="separador"></div>
      {joc.map((n, index) => (
        <div
          key={index}
          className="casella"
          onClick={() => clicadacasella(index, partida)}
        >
          {partida[index][index]}
        </div>
      ))}
      {/*<div className="casella" onClick={() => clicadacasella(0, partida)}>
        {partida[0][0]}
      </div>
      <div className="casella" onClick={() => clicadacasella(1, partida)}>
        {partida[1][1]}
      </div>
      <div className="casella" onClick={() => clicadacasella(2, partida)}>
        {partida[2][2]}
      </div>
      <div className="casella" onClick={() => clicadacasella(3, partida)}>
        {partida[3][3]}
      </div>
      <div className="casella" onClick={() => clicadacasella(4, partida)}>
        {partida[4][4]}
      </div>
      <div className="casella" onClick={() => clicadacasella(5, partida)}>
        {partida[5][5]}
      </div>
      <div className="casella" onClick={() => clicadacasella(6, partida)}>
        {partida[6][6]}
      </div>
      <div className="casella" onClick={() => clicadacasella(7, partida)}>
        {partida[7][7]}
      </div>
      <div className="casella" onClick={() => clicadacasella(8, partida)}>
        {partida[8][8]}
    </div>*/}
      <br />
      Propera jugada: {propera}
      <br />
      Partida: {JSON.stringify(partida)}
    </div>
  );
}
