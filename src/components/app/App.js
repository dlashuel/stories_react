import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';
import MainPage from '../MainPage/MainPage.js';



function App() {
  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route path="/stories_react" exact component={MainPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
