import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import './App.scss'



const App = () => (
  <div className="App">
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/chat" component={Chat} />
  </Router>
  </div>
);

export default App;
