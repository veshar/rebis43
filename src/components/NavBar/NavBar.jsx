
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import styles from "./navbar.module.css";
import "./navbar.css"

function NavBar(){
    return(
        
        <nav className={styles.navMain}>
        <ul className={styles.navList}>
            <li>
                <Link className={styles.redLink} to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/playeras">Playeras</Link>
            </li>
            <li>
                <Link to="/category/gorras">Gorras</Link>
            </li>
            <CartWidget/>
        </ul>
        
    </nav>
    );
}

export default NavBar;