import React from "react";
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./registration/Registration";
import login from "./registration/login";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <div className="wrap">
                    <Switch>
                        <Route path="/registration" component= {Registration}/>
                        <Route path="/login" component={login}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;