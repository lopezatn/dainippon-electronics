import React from "react";
import "./Index.css";
import DaiLogo from "../../assets/Dailogo-nobg.png";
import HomeImg from "../../assets/home.svg";
import AboutImg from "../../assets/about.svg";
import ProductImg from "../../assets/products.svg";
import ContactImg from "../../assets/contact.svg";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src={DaiLogo} alt="Dainippon" />
          <ul>
            <li>
              <a href="./Inicio"><img src={HomeImg} alt="Inicio-img" /></a>
              <a href="./Inicio">Inicio</a>{" "}
            </li>
            <li>
              <a href="./Empresa"><img src={AboutImg} alt="Empresa-img" /></a>
              <a href="./Empresa">Nuestra empresa</a>{" "}
            </li>
            <li>
              <a href="./Productos"><img src={ProductImg} alt="Productos-img" /></a>
              <a href="./Productos">Productos</a>{" "}
            </li>
            <li>
              <a href="./Contacto"><img src={ContactImg} alt="Contacto-img" /></a>
              <a href="./Contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        <h2>Bienvenido a Dainippon</h2>
        <p>
          Dainippon, con más de 35 años de experiencia, lidera la tecnología
          electrónica en Argentina. Nos especializamos en sistemas de alta
          seguridad para aeropuertos e infraestructuras críticas, ofreciendo
          soluciones integrales respaldadas por ingeniería preventa y postventa
          de calidad.
        </p>
      </header>

      {/* <main>
        <section></section>
      </main> */}

      {/* <footer>Copyright © Dainippon 2023</footer> */}
    </div>
  );
}

export default Home;
