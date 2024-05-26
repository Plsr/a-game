import { Map } from "./components/Map";
import "./App.css";
import { Player as PlayerClass } from "./lib/Player";
import { World } from "./lib/World";
import { Npc } from "./lib/Npc";
import { Resource } from "./lib/Resource";

function App() {
  console.log("rerendered");

  const world = new World({ dimensions: { x: 10, y: 10 } });
  const player = new PlayerClass({ x: 0, y: 0 });
  const npc = new Npc({ x: 5, y: 5 });
  const wood = new Resource({ x: 3, y: 3 }, true);
  world.addEntity(player);
  world.addEntity(npc);
  world.addEntity(wood);

  return (
    <>
      <Map world={world} />
    </>
  );
}

export default App;
