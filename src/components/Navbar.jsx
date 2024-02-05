import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'activeNavLink' : null}>Home</NavLink>
            </li>
        </nav>
    )
}

export default Navbar;