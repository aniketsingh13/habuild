import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Link to="/" className="headerTop">
        <span className="header_link">Todo</span>
      </Link>
      <Link to="/tictactoe" className="headerTop">
        <span className="header_link">Tictactoe</span>
      </Link>
    </div>
  );
};

export default Header;
