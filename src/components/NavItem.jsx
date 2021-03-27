import React from 'react'
import { NavLink } from "react-router-dom"
const NavItem = ({ children, to }) => {
    return (
        <NavLink activeClassName="text-color5" className="transition duration-600 px-4 uppercase text-color0 hover:text-color5 transform hover:scale-125" to={`/${to}`} >
            {children}
        </NavLink>
    )
}

export default NavItem
