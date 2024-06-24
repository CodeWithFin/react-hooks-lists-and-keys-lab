import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBarLinks = links.map((link)=>{
    return <nav >< a href={link}></a>{link}</nav>;
  })
  
}

export default NavBar;
