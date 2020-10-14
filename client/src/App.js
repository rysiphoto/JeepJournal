import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/";
import Home from "./Pages/Home/";
import Login from "./Pages/Login/";
import Maintain from "./Pages/Maintain/";
import Register from "./Pages/Register/";
import Trips from "./Pages/Trips/";
import TopMenu from "./Components/Menu";
import "./App.css";

export default function App() {

  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Maintain" component={Maintain} />
        <Route exact path="/Trips" component={Trips} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}


// import React, { useState, useCallback } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Footer from "./Components/Footer/";
// import Home from "./Pages/Home/";
// import Login from "./Pages/Login/";
// import Maintain from "./Pages/Maintain/";
// import Register from "./Pages/Register/";
// import Trips from "./Pages/Trips/";
// import TopMenu from "./Components/Menu";
// import "./App.css";
// import { AuthContext } from './shared/context/auth-context'

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = useCallback(() => {
//     setIsLoggedIn(true);
//   }, []);

//   const logout = useCallback(() => {
//     setIsLoggedIn(false);
//   }, []);

//   let routes;

//   if (isLoggedIn) {
//     routes = (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/Maintain" component={Maintain} />
//         <Route exact path="/Trips" component={Trips} />
//         <Redirect to='/' />
//       </Switch>
//     );
//   } else {
//     routes = (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/Login" component={Login} />
//         <Route exact path="/Register" component={Register} />
//         <Redirect to='/auth' />
//       </Switch>

//     );
//   }

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
//       <Router>
//         <TopMenu />
//         <main>
//           {routes}
//         </main>
//         <Footer />
//       </Router>
//     </AuthContext.Provider>
//   )
// }
