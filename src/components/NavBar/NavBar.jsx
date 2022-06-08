
import CartWidget from "./CartWidget.jsx";
import "./navbar.css"

function NavBar(){
    return(
        
        <nav className="nav">
        <ul className="nav-list">
            <a href="/">Inicio</a>
            <a href="/">Tienda</a>
            <a href="/">Contacto</a>
            <CartWidget/>
        </ul>
        
    </nav>
    );
}

export default NavBar;