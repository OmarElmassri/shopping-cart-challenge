import React from "react";
import "./App.less";
// Themes
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./layout/MUIstyles";
import Home from "./components";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
