import Comptador from "./Comptador";
import Graella from "./Graella";
import Acordio from "./Acordio";
import Carrusel from "./Carrusel";
import ToggleButton from "./ToggleButton";
import GroupButton from "./GroupButton";
import ToggleableSideBar from "./ToggleableSideBar";
import VectorSencers from "./VectorSencers";
import AfegirElement from "./AfegirElement";
import EliminarRepetits from "./EliminarRepetits";
import EliminarNoRepetits from "./EliminarNoRepetits";
import Concatenar from "./Concatenar";
import ConcatenarBis from "./ConcatenarBis";
import ArrayObjectes from "./ArrayObjectes";
import Contact from "./Contact";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "acordio", titol: "Menús desplegables", element: <Acordio /> },
  { path: "carrusel", titol: "Carrusel", element: <Carrusel /> },
  { path: "togglebutton", titol: "Toggle Button", element: <ToggleButton /> },
  { path: "groupbutton", titol: "Group Button", element: <GroupButton /> },
  {
    path: "toggleablesidebar",
    titol: "Toggleable Sidebar",
    element: <ToggleableSideBar />,
  },
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
  {
    path: "eliminarnorepetits",
    titol: "Eliminar NO repetits",
    element: <EliminarNoRepetits />,
  },
  {
    path: "concatenar",
    titol: "Concatenar 2 arrays",
    element: <Concatenar />,
  },
  {
    path: "concatenarbis",
    titol: "Concatenar 2 arrays bis",
    element: <ConcatenarBis />,
  },
  {
    path: "arrayobjectes",
    titol: "Array d'objectes",
    element: <ArrayObjectes />,
  },
  { path: "contact", titol: "Contacte", element: <Contact /> },
];
export default llista;
