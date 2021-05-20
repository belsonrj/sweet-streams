import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar/navBar";
import Home from "./components/Home";
import SearchMovies from "./components/Search/searchMovies";
import SearchShow from "./components/Search/searchShow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/movies"
            exact
            component={SearchMovies}
          />
          <Route
            path="/tv"
            exact
            component={SearchShow}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
