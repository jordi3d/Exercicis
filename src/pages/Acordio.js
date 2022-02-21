import "./Acordio.css";
import { useState } from "react";

export default function Acordio() {
  const desplega = false;
  const [desplega0, setDesplega0] = useState(true);
  const [desplega1, setDesplega1] = useState(true);
  const [desplega2, setDesplega2] = useState(true);
  const [desplega3, setDesplega3] = useState(true);
  let menus = ["Títol0", "Títol1", "Títol2", "Títol3", "Títol4"];
  let mostrals = [false, true, true, true, true];
  let nou = true;

  function fesclick(elem) {
    console.log(
      "IN 0: %s 1: %s 2: %s 3: %s 4: %s",
      mostrals[0],
      mostrals[1],
      mostrals[2],
      mostrals[3],
      mostrals[4]
    );
    switch (elem) {
      case 0:
        setDesplega0(!desplega0);
        mostrals[0] = !mostrals[0];
        break;
      case 1:
        setDesplega1(!desplega1);
        mostrals[1] = !mostrals[1];
        break;
      case 2:
        setDesplega2(!desplega2);
        mostrals[2] = !mostrals[2];
        break;
      case 3:
        setDesplega3(!desplega3);
        mostrals[3] = !mostrals[3];
        break;
      default:
    }
    if (desplega0) {
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
    }
    console.log(
      "OUT 0: %s 1: %s 2: %s 3: %s 4: %s",
      mostrals[0],
      mostrals[1],
      mostrals[2],
      mostrals[3],
      mostrals[4]
    );
    return true;
  }
  return (
    <div id="Acordio">
      <ul>
        {nou &&
          menus.map((n, index) => (
            <li
              className="Acordio__entrada"
              key={n}
              onClick={() => fesclick({ index })}
            >
              {!mostrals[index] && menus[index]}
            </li>
          ))}
        <li className="Acordio__entrada" onClick={() => fesclick(0)}>
          {!desplega && menus[0]}
        </li>
        <li className="Acordio__entrada" onClick={() => fesclick(1)}>
          {!desplega0 && menus[1]}
        </li>
        <li className="Acordio__entrada" onClick={() => fesclick(2)}>
          {!desplega1 && menus[2]}
        </li>
        <li className="Acordio__entrada" onClick={() => fesclick(3)}>
          {!desplega2 && menus[3]}
        </li>
        <li className="Acordio__entrada" onClick={() => fesclick(4)}>
          {!desplega3 && menus[4]}
        </li>
      </ul>
    </div>
  );
}

/*<li className="entrada" key={n} onClick={() => fesclick({ n})}>
           {submenus_l[n]} && {submenus[n]} 
</li>*/
