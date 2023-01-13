import React from "react";
import "../css/buttons.css";
import "../css/containers.css";

export default function Navbar() {
  return (
    <div className='nav-body'>
      <button className='button-header nav-button'>Home</button>
      <button className='button-header'>Our Menu</button>
    </div>
  );
}
