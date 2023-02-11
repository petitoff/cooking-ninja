/* eslint-disable import/no-unresolved */
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to={"/"} className="brand">
          <h1>Cooking Ninnja</h1>
        </Link>
        <SearchBar />
        <Link to={"/create"}>Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
