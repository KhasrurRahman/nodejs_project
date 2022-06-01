import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">products</Link>
          <Link to="/add">Add Products</Link>
          <Link to="/update">Update Products</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
