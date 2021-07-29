import React from "react";

import GlobalStyle from "./components/GlobalStyle";

// import of about
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import Nav from "../src/components/Nav";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetails />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
