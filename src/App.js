

import './DarkMode/dark-mode.css';
import './DarkMode/dark-mode-switch';
import './DarkMode/dark-mode-switch.min';
import React, {useContext, useEffect} from "react";
import Navbars from './Components/Navbars'
import Books from "../src/containers/books";
import {observer} from "mobx-react-lite";

import {
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom"
import {login} from './authorization/login.js';
import {Registration} from './registration/registration.js';
import LoginForm from "./Components/LoginForm";
import {Context} from "./index";
import RegistForm from "./Components/RegistForm";






function App() {
    const {store} = useContext(Context);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }
    if(!store.isAuth){
        return (
            <div><Navbars/>
                <Router>

                    <Switch>
                        <Route exact path="/" component={Books}/>
                        <Route exact path="/registration" component={RegistForm}/>
                        <Route exact path="/login" component={LoginForm}/>
                    </Switch>
                </Router></div>


        )
    }

    return (

        <div className="App">
            <Navbars/>




            <Router>
                <Switch>
                    <Route exact path="/" component={Books}/>
                    <Route exact path="/registration" component={RegistForm}/>
                    <Route exact path="/login" component={LoginForm}/>
                </Switch>
            </Router>






        </div>
    );
}

export default observer(App);
