import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from ".pages/Home";
import Contact from ".pages/Contact";
import NoPage from ".pages/NoPage";
import Graella from "./Graella";
import Comptador from "./Comptador";
import Acordio from "./Acordio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="graella" element={<Graella />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="acordio" element={<Acordio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
