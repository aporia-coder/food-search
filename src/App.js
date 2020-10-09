import React from "react";
import "./styles/styles.scss";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CalorieCalculator from "./pages/CalorieCalculator";

// Components
import Navbar from "./components/Navbar";

// MUI
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#da3b6b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:fooditem" component={SingleProduct} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/calculator" component={CalorieCalculator} />
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
