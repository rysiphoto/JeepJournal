import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/";
import Home from "./Pages/Home/";
import Maintain from "./Pages/Maintain/";
import Trips from "./Pages/Trips/";
import TopMenu from "./Components/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <TopMenu />
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Maintain" component={Maintain} />
      <Route exact path="/Trips" component={Trips} />
      <Footer />
    </Router>
  );
}

export default App;
