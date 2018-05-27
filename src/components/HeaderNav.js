import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => (
	<nav className="navbar">
		<h1 className="navbar__title">NASA Daily</h1>
		<div className="navbar__links">
			<NavLink exact to="/" className="navbar__link" activeClassName="selected">Daily</NavLink>
			<NavLink to="/nearobjects" className="navbar__link" activeClassName="selected">Near-Earth Objects</NavLink>
			<NavLink to="/search" className="navbar__link" activeClassName="selected">Search</NavLink>
		</div>
	</nav>

);

export default HeaderNav;

