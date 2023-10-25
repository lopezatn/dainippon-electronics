import React from "react";
import DaiLogo from "../../assets/Dailogo-nobg.png";
import HomeImg from "../../assets/home.svg";
import AboutImg from "../../assets/about.svg";
import ProductImg from "../../assets/products.svg";
import ContactImg from "../../assets/contact.svg";
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <header class="header-container">
        <nav>
          <img src={DaiLogo} alt="Dainippon" />
          <ul>
            <li>
              <Link to="/">
                <img src={HomeImg} alt="Inicio-img" />
              </Link>
              <Link to="/">Inicio</Link>{" "}
            </li>
            <li>
              <Link to="/Nuestra-Empresa">
                <img src={AboutImg} alt="Empresa-img" />
              </Link>
              <Link to="/Nuestra-empresa">Nuestra empresa</Link>{" "}
            </li>
            <li>
              <Link to="/Productos">
                <img src={ProductImg} alt="Productos-img" />
              </Link>
              <Link to="./Productos">Productos</Link>{" "}
            </li>
            <li>
              <Link to="./Contacto">
                <img src={ContactImg} alt="Contacto-img" />
              </Link>
              <Link to="./Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar;