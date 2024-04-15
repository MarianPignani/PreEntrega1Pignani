import volcomImg from "../img/img-logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="contenedor">
            <div className="contenedor-logo">
                <img src={volcomImg} alt="Logo" className="logo" />
                <div>
                    <CartWidget />
                </div>
            </div>
            <div className="contenedor-nav">
                <nav className="barra">
                    <ul className="listas">
                        <li className="lista"><a className="menu" href="">PRODUCTOS</a></li>
                        <li className="lista"><a className="menu" href="">NOSOTROS</a></li>
                        <li className="lista"><a className="menu" href="">LOCALES</a></li>
                        <li className="lista"><a className="menu" href="">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;