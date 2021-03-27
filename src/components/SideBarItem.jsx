import React from 'react'
import { NavLink } from "react-router-dom"
const NavItem = ({ children, to,title }) => {
    return (
        <NavLink activeClassName="text-color5" className="sidebar relative transition duration-600 py-6 uppercase font-bold text-color0 hover:text-color5 transform hover:scale-125" to={`/${to}`} >
            {children}
            <span className="absolute title left-14 ml-4 top-1/3 opacity-0 bg-color4 font-normal text-xs text-color0 px-8 py-2">{to}</span>
        </NavLink>
    )
}

export default NavItem
