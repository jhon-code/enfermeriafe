import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <ul>
            <li>
                <NavLink to={"/enfermera"} className="navlink">
                    ENFERMERIA
                </NavLink>
            </li>
            <li>
                <NavLink to={"/paciente"} className="navlink">
                    USUARIOS
                </NavLink>
            </li>


        </ul>

    );




}