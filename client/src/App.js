import logo from "./logo.svg";
import "./App.css";
import IceCoffeData from "./components/icecoffee";
import HotCoffeeData from "./components/hotcoffee";
import NavBar from "./components/nav-bar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IceCoffeData />
      <HotCoffeeData />
    </div>
  );
}

export default App;
