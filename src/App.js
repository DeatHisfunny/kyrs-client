

import React from "react";
import Navbar from "./Components/Navbar.js";
import {Books} from "./containers/books";

import {
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom"
import {login} from './authorization/login.js';
import {Registration} from './registration/registration.js';
import LoginForm from "./Components/LoginForm";





function App() {

  return (

    <div className="App">
<LoginForm />

            <Navbar />


        <Router>
            <Switch>
                <Route exact path="/" component={Books}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/login" component={login}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
