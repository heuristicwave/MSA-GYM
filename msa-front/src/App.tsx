import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Products from "./admin/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Products />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
