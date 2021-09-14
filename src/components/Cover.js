import React from "react";
import Nav from "./Nav.js";
import { useTranslation } from "react-i18next";

const Cover = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section id="header" className="header">
        <div className="cover">
          <Nav></Nav>
          
        </div>
        <div className="coverText">
          <h1 className="cover_mainTitle">María Serna Zafra</h1>
          <h2 className="cover_title">&#60;{t("cover.job")}&#62;</h2>
          <p className="cover_text">{t("cover.typewriter")}</p>
        </div>
      </section>
    </>
  );
};

export default Cover;
