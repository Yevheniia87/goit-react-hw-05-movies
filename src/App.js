import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";

const App = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
  </>
);

export default App;
