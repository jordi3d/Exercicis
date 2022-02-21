import Comptador from "./Comptador";
import Graella from "./Graella";
import Acordio from "./Acordio";
import Contact from "./Contact";
//import ToggleButton from "./ToggleButton";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "acordio", titol: "Menús desplegables", element: <Acordio /> },
  { path: "contact", titol: "Contacte", element: <Contact /> },
];
export default llista;
