import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-brand container">ToDoList App</div>
        <ul className="navbar-nav justify-content-end container">
          <li className="nav-link px-4"><Link to='/'>Home</Link></li>
          <li className="nav-link px-4"><Link to='/add'>Add Todo</Link></li>
          <li className="nav-link px-4"><Link to='/about'>About</Link></li>
        </ul>
      </nav>
		</header>
	)
}

export default Header;