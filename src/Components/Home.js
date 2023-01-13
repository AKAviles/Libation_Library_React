import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../css/containers.css";

export default function Home() {
  return (
    <div className='page-body'>
      <div>
        <Header />
      </div>
      <div className='hero-body'>
        <Hero />
      </div>
    </div>
  );
}
