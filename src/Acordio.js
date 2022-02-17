import "./Acordio.css";
import { useState } from "react";

let menus = ["Títol0", "Títol1", "Títol2", "Títol3", "Títol4"];

export default function Acordio() {
  const [desplega0, setDesplega0] = useState(false);
  const [desplega1, setDesplega1] = useState(false);
  const [desplega2, setDesplega2] = useState(false);
  const [desplega3, setDesplega3] = useState(false);
  const [desplega4, setDesplega4] = useState(false);

  function fesclick(elem) {
    /*  console.log("Index %s %d", elem.n, elem.index);*/
    console.log(
      "IN 0: %s 1: %s 2: %s 3: %s",
      desplega0,
      desplega1,
      desplega2,
      desplega3
    );
    switch (elem) {
      case 0:
        console.log("abans %s", desplega0);
        setDesplega0(!desplega0);
        console.log("després %s", desplega0);
        setDesplega1(false);
        setDesplega2(false);
        setDesplega3(false);
        setDesplega4(false);
        break;
      case 1:
        setDesplega1(!desplega1);
        setDesplega2(false);
        setDesplega3(false);
        setDesplega1(false);
        break;
      case 2:
        setDesplega2(!desplega2);
        setDesplega3(false);
        setDesplega4(false);
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
      "OUT 0: %s 1: %s 2: %s 3: %s",
      desplega0,
      desplega1,
      desplega2,
      desplega3
    );
    return true;
  }
  return (
    <div id="acordio">
      <ul>
        <li className="entrada" onClick={() => fesclick(0)}>
          {menus[0]}
        </li>
        <li className="entrada" onClick={() => fesclick(1)}>
          {desplega0 && menus[1]}
        </li>
        <li className="entrada" onClick={() => fesclick(2)}>
          {desplega1 && menus[2]}
        </li>
        <li className="entrada" onClick={() => fesclick(3)}>
          {desplega2 && menus[3]}
        </li>
        {/*menus.map((n, index) => (
          <li
            className="entrada"
            key={n}
            onClick={() => fesclick({ n, index })}
          >
            {menus[index]}
          </li>
        ))*/}
      </ul>
    </div>
  );
}

/*<li className="entrada" key={n} onClick={() => fesclick({ n})}>
           {submenus_l[n]} && {submenus[n]} 
</li>*/
