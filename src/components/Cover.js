import React from "react";
import Nav from "./Nav.js";

const Cover = () => {
  return (
    <>
      <section id="cover" className="cover">
        <Nav></Nav>
        <div className="coverContainer">
          <h1 className="cover_mainTitle">María Serna Zafra</h1>
          <h2 className="cover_title">&#60;Frontend Developer&#62;</h2>
        </div>
      </section>
    </>
  );
};

export default Cover;
