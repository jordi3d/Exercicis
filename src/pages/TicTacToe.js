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
  const tauler_buit = [
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

  function reset() {
    setPartida(tauler_buit);
    setPropera("X");
    let tmp = document.getElementsByClassName("guanya");
    console.log("guanya: ", tmp, tmp.length);
    if (tmp.length) {
      for (let i = tmp.length - 1; i >= 0; i--) tmp[i].className = "casella";
    }
    let tmp2 = document.getElementsByClassName("guanyes");
    console.log("guanyes: ", tmp2, tmp2.length);
    if (tmp2.length) {
      for (let j = tmp2.length - 1; j >= 0; j--) tmp2[j].className = "casella";
    }
    return false;
  }

  function fae(tauler, seg) {
    let res = 0;
    let Os = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    let Xs = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    for (let i = 0; i < 9; i++) {
      switch (tauler[i][i]) {
        case "O":
          Os[i] = i;
          break;
        case "X":
          Xs[i] = i;
          break;
        default:
          res++;
      }
    }
    let tmp = document.getElementsByClassName("casella");
    if (res <= 4) {
      if (Os[0] === 0 && Os[1] === 1 && Os[2] === 2) {
        tmp[0].classList += " guanya";
        tmp[1].classList += " guanya";
        tmp[2].classList += " guanya";
      } else if (Os[3] === 3 && Os[4] === 4 && Os[5] === 5) {
        tmp[3].classList += " guanya";
        tmp[4].classList += " guanya";
        tmp[5].classList += " guanya";
      } else if (Os[6] === 6 && Os[7] === 7 && Os[8] === 8) {
        tmp[6].classList += " guanya";
        tmp[7].classList += " guanya";
        tmp[8].classList += " guanya";
      } else if (Os[0] === 0 && Os[3] === 3 && Os[6] === 6) {
        tmp[0].classList += " guanya";
        tmp[3].classList += " guanya";
        tmp[6].classList += " guanya";
      } else if (Os[1] === 1 && Os[4] === 4 && Os[7] === 7) {
        tmp[1].classList += " guanya";
        tmp[4].classList += " guanya";
        tmp[7].classList += " guanya";
      } else if (Os[2] === 2 && Os[5] === 5 && Os[8] === 8) {
        tmp[2].classList += " guanya";
        tmp[5].classList += " guanya";
        tmp[8].classList += " guanya";
      } else if (Os[0] === 0 && Os[4] === 4 && Os[8] === 8) {
        tmp[0].classList += " guanya";
        tmp[4].classList += " guanya";
        tmp[8].classList += " guanya";
      } else if (Os[2] === 2 && Os[4] === 4 && Os[6] === 6) {
        tmp[2].classList += " guanya";
        tmp[4].classList += " guanya";
        tmp[6].classList += " guanya";
      } else if (Xs[0] === 0 && Xs[1] === 1 && Xs[2] === 2) {
        tmp[0].classList += " guanyes";
        tmp[1].classList += " guanyes";
        tmp[2].classList += " guanyes";
      } else if (Xs[3] === 3 && Xs[4] === 4 && Xs[5] === 5) {
        tmp[3].classList += " guanyes";
        tmp[4].classList += " guanyes";
        tmp[5].classList += " guanyes";
      } else if (Xs[6] === 6 && Xs[7] === 7 && Xs[8] === 8) {
        tmp[6].classList += " guanyes";
        tmp[7].classList += " guanyes";
        tmp[8].classList += " guanyes";
      } else if (Xs[0] === 0 && Xs[3] === 3 && Xs[6] === 6) {
        tmp[0].classList += " guanyes";
        tmp[3].classList += " guanyes";
        tmp[6].classList += " guanyes";
      } else if (Xs[1] === 1 && Xs[4] === 4 && Xs[7] === 7) {
        tmp[1].classList += " guanyes";
        tmp[4].classList += " guanyes";
        tmp[7].classList += " guanyes";
      } else if (Xs[2] === 2 && Xs[5] === 5 && Xs[8] === 8) {
        tmp[2].classList += " guanyes";
        tmp[5].classList += " guanyes";
        tmp[8].classList += " guanyes";
      } else if (Xs[0] === 0 && Xs[4] === 4 && Xs[8] === 8) {
        tmp[0].classList += " guanyes";
        tmp[4].classList += " guanyes";
        tmp[8].classList += " guanyes";
      } else if (Xs[2] === 2 && Xs[4] === 4 && Xs[6] === 6) {
        tmp[2].classList += " guanyes";
        tmp[4].classList += " guanyes";
        tmp[6].classList += " guanyes";
      } else if (res === 0)
        alert("S'ha acabat el joc!\x0dPrem RESET per jugar de nou");
    }
  }
  function clicadacasella(posicio, tauler) {
    if (partida[posicio][posicio] === "\xa0") {
      propera === "O" ? setPropera("X") : setPropera("O");
      tauler[posicio][posicio] = propera;
      setPartida(tauler);
      fae(partida, posicio);
    } else alert("clica en una casella buida");
    return false;
  }
  return (
    <div id="tictactoe">
      <h1>3 en ratlla</h1>
      <div className="separador"></div>
      {partida.map((n, index) => (
        <div
          key={index}
          className="casella"
          onClick={() => clicadacasella(index, partida)}
        >
          {partida[index][index]}
        </div>
      ))}
      <br />
      Propera jugada: {propera}
      <br />
      <br />
      <div className="separador"></div>
      <button onClick={() => reset()}>&nbsp;RESET&nbsp;</button>
    </div>
  );
}
