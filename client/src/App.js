import logo from "./logo.svg";
import "./App.css";
import IceCoffeData from "./components/icecoffee";
import HotCoffeeData from "./components/hotcoffee";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <IceCoffeData />
      <HotCoffeeData />
    </div>
  );
}

export default App;
