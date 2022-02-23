import Comptador from "./Comptador";
import Graella from "./Graella";
import Acordio from "./Acordio";
import VectorSencers from "./VectorSencers";
import AfegirElement from "./AfegirElement";
import EliminarRepetits from "./EliminarRepetits";
import Contact from "./Contact";

//import ToggleButton from "./ToggleButton";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "acordio", titol: "Menús desplegables", element: <Acordio /> },
  {
    path: "vectorsencers",
    titol: "Vector de sencers",
    element: <VectorSencers />,
  },
  {
    path: "afegirelement",
    titol: "Afegir un element",
    element: <AfegirElement />,
  },
  {
    path: "eliminarrepetits",
    titol: "Eliminar repetits",
    element: <EliminarRepetits />,
  },
  { path: "contact", titol: "Contacte", element: <Contact /> },
];
export default llista;
