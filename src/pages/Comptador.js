import "./Comptador.css";
import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

export default function Comptador() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <div id="Comptador">
      <div id="Comptador__Disp">{count}</div>
      <button id="Comptador__Inc" onClick={() => dispatch(increment(+1))}>
        +1
      </button>
      <button id="Comptador__Dec" onClick={() => dispatch(increment(-1))}>
        -1
      </button>
      <button id="Comptador__Mes5" onClick={() => dispatch(increment(+5))}>
        +5
      </button>
      <button id="Comptador__Reset" onClick={() => dispatch(reset())}>
        RESET
      </button>
    </div>
  );
}
