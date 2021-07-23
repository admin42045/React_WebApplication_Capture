import React from "react";

import GlobalStyle from "./components/GlobalStyle";

// import of about
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import Nav from '../src/components/Nav';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
