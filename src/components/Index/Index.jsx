import React, { useState, useEffect } from "react";
import "./Index.css";
import DaiLogo from "../../assets/Dailogo-nobg.png";
import HomeImg from "../../assets/home.svg";
import AboutImg from "../../assets/about.svg";
import ProductImg from "../../assets/products.svg";
import ContactImg from "../../assets/contact.svg";
import AeropuertoEz from "../../assets/aeropuerto-ezeiza.jpg"
import Equipment1 from "../../assets/airport-equipment-1.jpg";
import Equipment2 from "../../assets/airport-equipment-2.jpg";


function Home() { 
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header class="header-container">
        <nav>
          <img src={DaiLogo} alt="Dainippon" />
          <ul>
            <li>
              <a href="./Inicio">
                <img src={HomeImg} alt="Inicio-img" />
              </a>
              <a href="./Inicio">Inicio</a>{" "}
            </li>
            <li>
              <a href="./Empresa">
                <img src={AboutImg} alt="Empresa-img" />
              </a>
              <a href="./Empresa">Nuestra empresa</a>{" "}
            </li>
            <li>
              <a href="./Productos">
                <img src={ProductImg} alt="Productos-img" />
              </a>
              <a href="./Productos">Productos</a>{" "}
            </li>
            <li>
              <a href="./Contacto">
                <img src={ContactImg} alt="Contacto-img" />
              </a>
              <a href="./Contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section class={`main-header-content ${animate ? "slide-down" : ""}`}>
          <div class="left-container">
            <header>
              <h2 class="main-title-style">Bienvenido!</h2>
            </header>
            <p class="main-desc-style">
              Dainippon, con más de 35 años de experiencia, lidera la tecnología
              electrónica en Argentina. Nos especializamos en sistemas de alta
              seguridad para aeropuertos e infraestructuras críticas, ofreciendo
              soluciones integrales respaldadas por ingeniería preventa y postventa
              de calidad.
            </p>
          </div>
          <div class="right-container">
            <img src={AeropuertoEz} alt="Aeropuertos-img" class="aeropuerto-ez"/>
          </div>
        </section>

        <section class="our-tech">
          <div class="item-left">
            <img src={Equipment1} alt="img-aeroportuaria" class="equipos-img"/>
            <header>Nuestras tecnologías</header>
            <ul>
            <li>Sistemas de inspección por rayos X (scanners) para equipaje de mano y despachado.</li>
            <li>Sistemas de inspección de carga a granel y pallets.</li>
            <li>Sistemas de inspección de grandes cargas, camiones y contenedores, utilizados en control fronterizo y aduanero.</li>
            <li>Detectores de trazas que permiten la detección e identificación de sustancias peligrosas o prohibidas, como narcóticos o explosivos.</li>
            <li>Detectores de metales para inspección corporal.</li>
            <li>Detectores de metales para inspección de productos o cargas.</li>
            <li>Analizadores portátiles para identificación de sustancias químicas mediante espectrometría IR / Raman.</li>
            <li>Sistemas de inspección corporal por rayos X o tecnología de ondas milimétricas.</li>
            <li>Detectores de material radioactivo.</li>
            <li>Equipos de identificación para fines científicos.</li>
            <li>Robots para la manipulación de elementos peligrosos.</li>
            <li>Equipos especiales con capacidad de identificación de agentes químicos de guerra y productos químicos tóxicos industriales.</li>
            <li>Integración de tecnologías con sistemas de gestión centralizada, CCTV, control de acceso, etc.</li>
            <li>Desarrollo de soluciones personalizadas.</li>
            </ul>
          </div>
          <br/><br/>
          <div class="item-right">
            <img src={Equipment2} alt="img-aeroportuaria" class="equipos-img"/>
            <header>Servicios</header>
            <ul>
            <li>Asesoramiento de proyecto para identificar la solución más efectiva.</li>
            <li>Capacitación de operadores incluida con la adquisición del equipamiento.</li>
            <li>Servicios de garantía y mantenimiento postventa en el lugar.</li>
            <li>Disponibilidad local de repuestos y piezas.</li>
            </ul>
          </div>
        </section>

      </main>

      {/* <footer>Copyright © Dainippon 2023</footer> */}
    </div>
  );
}

export default Home;
