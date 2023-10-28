import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/pizza">
        Pizza
      </NavLink>
      <NavLink exact to="/water">
        Water
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
    </nav>
  );
}

export default NavBar;