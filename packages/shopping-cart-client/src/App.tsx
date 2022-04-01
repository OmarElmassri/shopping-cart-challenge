import React from "react";
import "./App.scss";
// Themes
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./layout/MUIstyles";
import Home from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
