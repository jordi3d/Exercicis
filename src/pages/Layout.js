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
              <li key={item.path}>
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className="HolyGrail-ads">
          <a
            id="aw0"
            target="_top"
            href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=CBcD_pDIZYrTJKIajmLAPrJGNwAXk7sbTaJW65czfDq6-wKrbHBABIIbZlgNg1YWAgLwIoAHipYn2AsgBAqkC1NktRuDdsj6oAwHIA8kEqgTzAU_QSdnanUeICvEL6HSSe5iBpQ3S6d2sYTH_gNf_cttrCdz7IFBrGxQVUNIXpHpFqW_4DDAuaGUzPp2YK2wkynn6zOSvQ-L6V90VxuIrlzqWlTov2lATkSveCxquKpH4B9O5KzTVzmcpgkWvvq4yvaJj5GZvonENshFv30svNekVnzqY-iFEoLhW8Z-KXYtlI3narsrSKsmYBafrHdH9dLDDA3pRo0cOmH2rWOv61FD4qout-E3i0d61BnV1equ0OFgD3rec5_EoCgmlaikT4nMjxxcMZ8ZnHsv4sGr7YgHU5HxixktI_1157ooZp24U2rqWasAE9cjY1sMDkAYBoAYCgAeG2vaJAYgHAZAHAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAdIICQiAgIAQEAIYGrEJzFls7yfKTPCACgGYCwHICwG4DAHYEwzQFQGYFgH4FgGAFwE&ae=1&num=1&cid=CAMSeQClSFh3VqWdz5Cv1s6Y109YlrdQeWOxKLzjkAu3vClDsMS_gIyqEtpXmV031pY7fOytshop8p-eODDDOkwpGFHbLMSDIqzhXmaQGw1YpqqxPIgUZIbRXNensCGh5c8P8hraQx7o_HbNkqKDYJviIHyeVJi8YKcUFqc&sig=AOD64_1FA0UWB2WMP9rF1EiOBc0PxOV_dA&client=ca-pub-5540693597566499&nb=17&adurl=https://es.thepowermba.com/emprendedores/%3Futm_source%3Dgoogle%26utm_medium%3Ddisplay%26utm_campaign%3Dtpmba_es_display_pro_emprendedores_curso_gratis_estaticos%26utm_variant%3D%26utm_country%3Des%26utm_product%3Dtpmba%26utm_placement%3Dpro%26utm_custmpers%3D%26utm_page%3Demprendedores%26utm_term%3D%26utm_campaign%3DTPMBA%2B-%2BES%2B-%2BDISPLAY%2B-%2BPRO%2B-%2BCustom%2BIntent%26utm_source%3Dadwords%26utm_medium%3Dppc%26hsa_acc%3D4360618991%26hsa_cam%3D12888517331%26hsa_grp%3D121246196853%26hsa_ad%3D558524927229%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gclid%3DCj0KCQiAmeKQBhDvARIsAHJ7mF6c_eCt4xrO6XT05ExS0X_Sk--fwTuLtFj9UGEX93B-J3hD5cy-UoAaAkvVEALw_wcB"
            data-asoch-targets="ad0"
          >
            <img
              src="https://tpc.googlesyndication.com/simgad/14406830377225349365?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnhLSvU6884z9QJnLN7v2TjU02-DA"
              border="0"
              width="263"
              alt=""
              class="img_ad"
              rel="noreferrer"
            />
          </a>
        </aside>
      </div>
      <footer>&copy; 2022 Jordi Alonso</footer>
    </>
  );
}
