import { Map } from "./components/Map";
import "./App.css";
import { Player as PlayerClass } from "./lib/Player";

function App() {
  console.log("rerendered");

  const player = new PlayerClass();
  return (
    <>
      <Map player={player} />
    </>
  );
}

export default App;
