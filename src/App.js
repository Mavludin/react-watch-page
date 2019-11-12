import React, { Component } from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import VideoWatchPage from './VideoWatchPage';
import HomePage from './HomePage';

import logo from "./logo.svg";
import classes from "./App.module.css";


class App extends Component {

  render() {

    return (
        <BrowserRouter>
          <div className={classes.App}>
            <Route path="/" component={HomePage} />
          </div>        
        </BrowserRouter>
    );
  }
}

export default App;
