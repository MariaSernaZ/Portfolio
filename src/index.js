import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./languages/es/global.json";
import global_en from "./languages/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
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
