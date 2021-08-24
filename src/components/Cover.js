import React from "react";
import Nav from "./Nav.js";

const Cover = () => {
  return (
    <>
      <section id="header" className="header">
        <div className="cover">
          <Nav></Nav>
        </div>
        <div className="coverText">
          <h1 className="cover_mainTitle">María Serna Zafra</h1>
          <h2 className="cover_title">&#60;Frontend Developer&#62;</h2>
          <p className="cover_text">Welcome to my portfolio!</p>
        </div>
      </section>
    </>
  );
};

export default Cover;
