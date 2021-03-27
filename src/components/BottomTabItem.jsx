import React from 'react'
import { NavLink } from "react-router-dom"
const BottomTabItem = ({ children, to }) => {
    return (
        <NavLink activeClassName="text-color5" className="transition duration-600 uppercase font-bold text-color0" to={`/${to}`} >
            {children}
        </NavLink>
    )
}

export default BottomTabItem
