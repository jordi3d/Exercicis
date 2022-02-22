import "./Acordio.css";
import { useState } from "react";

export default function Acordio() {
  const desplega = false;
  const [desplega0, setDesplega0] = useState(true);
  const [desplega1, setDesplega1] = useState(true);
  const [desplega2, setDesplega2] = useState(true);
  const [desplega3, setDesplega3] = useState(true);
  let menus = ["Títol0", "Títol1", "Títol2", "Títol3", "Títol4"];
  let mostrals = [desplega, desplega0, desplega1, desplega2, desplega3];

  function fesclick(elem) {
    switch (elem) {
      case 0:
        setDesplega0(!desplega0);
        break;
      case 1:
        setDesplega1(!desplega1);
        break;
      case 2:
        setDesplega2(!desplega2);
        break;
      case 3:
        setDesplega3(!desplega3);
        break;
      default:
    }
    /* if (desplega0) {
      if (desplega1) {
        if (desplega2) {
        } else {
        }
      } else {
        if (desplega2) {
        } else {
        }
      }
    } else {
      if (desplega1) {
        if (desplega2) {
        } else {
        }
      } else {
        if (desplega2) {
        } else {
        }
      }
    }*/
    return true;
  }
  return (
    <div id="Acordio">
      <ul>
        {menus.map((n, index) => (
          <li
            className="Acordio__entrada"
            key={n}
            onClick={() => fesclick(index)}
          >
            {!mostrals[index] && menus[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
