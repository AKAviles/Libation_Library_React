import React from "react";
import Navbar from "./Navbar";
import "../css/containers.css";
import "../css/buttons.css";

export default function Header() {
  return (
    <div className='header-body'>
      <div>
        <h1>Libation Library</h1>
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <button className='button-contact-head'>Contact Us</button>
      </div>
    </div>
  );
}
