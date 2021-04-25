import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CharacterContextProvider } from "./contexts/CharactersContext";
import "./index.css";

ReactDOM.render(
  <CharacterContextProvider>
    <App />
  </CharacterContextProvider>,
  document.getElementById("root")
);
