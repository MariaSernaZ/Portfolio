import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./languages/es/global.json";
import global_en from "./languages/en/global.json";

import about_es from "./languages/es/about.json";
import about_en from "./languages/en/about.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
      about: about_es,
    },
    en: {
      global: global_en,
      about: about_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
