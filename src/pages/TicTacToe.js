import "./TicTacToe.css";
import { useState } from "react";

export default function TicTacToe() {
  return (
    <div id="tictactoe">
      <h1>3 en ratlla</h1>
      <div id="separador"></div>
      <div className="casella">X</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">O</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">&nbsp;</div>
      <div className="casella">&nbsp;</div>
    </div>
  );
}
