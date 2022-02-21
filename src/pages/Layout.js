import { Outlet, Link } from "react-router-dom";
import llista from "./llista";

export default function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
        <nav className="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {llista.map((item) => (
              <li>
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className="HolyGrail-ads">…</aside>
      </div>
      <footer>&copy; 2022 Jordi Alonso</footer>
    </>
  );
}
