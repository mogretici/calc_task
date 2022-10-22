import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </StrictMode>
);
reportWebVitals();
