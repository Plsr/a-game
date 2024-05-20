import { Map } from "./components/Map";
import "./App.css";
import { Player as PlayerClass } from "./lib/Player";
import { World } from "./lib/World";

function App() {
  console.log("rerendered");

  const world = new World({ dimensions: { x: 10, y: 10 } });
  const player = new PlayerClass({ x: 0, y: 0 });
  world.addEntity(player);

  return (
    <>
      <Map world={world} />
    </>
  );
}

export default App;
