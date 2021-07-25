import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./main/Main";
import Products from "./admin/Products";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/admin/products" component={Products} />
      </BrowserRouter>
    </div>
  );
}

export default App;
