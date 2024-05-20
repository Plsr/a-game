import { Map } from "./components/Map";
import "./App.css";
import { Player as PlayerClass } from "./lib/Player";
import { World } from "./lib/World";
import { Npc } from "./lib/Npc";

function App() {
  console.log("rerendered");

  const world = new World({ dimensions: { x: 10, y: 10 } });
  const player = new PlayerClass({ x: 0, y: 0 });
  const npc = new Npc({ x: 5, y: 5 });
  world.addEntity(player);
  world.addEntity(npc);

  return (
    <>
      <Map world={world} />
    </>
  );
}

export default App;
