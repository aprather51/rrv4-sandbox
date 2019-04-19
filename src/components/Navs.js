import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = () => (
	<nav class="nav-container">
		<NavLink exact to="/" activeClassName="active">
			Home
		</NavLink>
		<NavLink to="/about" activeClassName="active">
			About
		</NavLink>
		<NavLink to="/contact" activeClassName="active">
			Contact
		</NavLink>
	</nav>
);

export default Navs;
