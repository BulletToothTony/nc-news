import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'activeNavLink' : null}>Home</NavLink>
            </li>

            <li>
            <NavLink to="/topics" className={({isActive}) => isActive ? 'activeNavLink' : null}>Topics</NavLink>
            </li>

            <li>
            <NavLink to="/users" className={({isActive}) => isActive ? 'activeNavLink' : null}>Users</NavLink>
            </li>

            <li>
            <NavLink to="/new-article" className={({isActive}) => isActive ? 'activeNavLink' : null}>New Article</NavLink>
            </li>
        </nav>
    )
}

export default Navbar;