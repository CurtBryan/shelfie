import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img
          className="headerLogo"
          src="https://static1.squarespace.com/static/583dcbeb3e00be9943bb3b15/t/5845303a6b8f5be74d21c07c/1489739942965/Press-Gallery-Dry-Cleaning-Edmonton"
        />
      </div>
      <div>
        <NavLink activeClassName="active" exact to="/">
          Dashboard
        </NavLink>
        <NavLink activeClassName="active" exact to="/AddInventory">
          Add Inventory
        </NavLink>
      </div>
    </header>
  );
}
