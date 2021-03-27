import React from "react";
import NavItem from "./NavItem";

export default function Navbar({isAuthenticated,setAuthenticated}) {
    const logout = ()=>{
        setAuthenticated(false)
    }
  return (
     <nav style={{height:70}} className=" fixed top-0 z-10 w-full px-8 flex justify-between items-center bg-color4 overflow-x-hidden">
        <div className="uppercase font-ex   trabold text-lg text-color0" >sportslathon</div>
        <div className="flex justify-end items-center" >
            <NavItem to="home">
                Home
            </NavItem>
            <NavItem to="explore">
                Explore
            </NavItem>
            <NavItem to="contact">
                contact
            </NavItem>
            <NavItem to="profile">
                profile
            </NavItem>
            
            {
                !isAuthenticated?<div>
                    <NavItem to="login">
                Login
            </NavItem>
            <NavItem to="register">
                Register
            </NavItem>
                </div>:<button onClick={logout} >Logout</button>
            }
            
        </div>
     </nav>
  );
}