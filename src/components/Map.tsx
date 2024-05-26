import { useEffect, useState } from "react";
import { tileSize } from "../../gameConfig";

import { World } from "../lib/World";
import { Entity } from "../lib/Entity";
import { MovementDirection } from "../types/movement";
import { Item } from "../lib/Inventory";

export const Map = ({ world }: { world: World<Entity> }) => {
  const [, setFrameTime] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const handledEvents = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

      if (handledEvents.includes(e.key)) {
        e.preventDefault();
        if (world.canMove(world.playerEntity, e.key as MovementDirection)) {
          world.playerEntity.move(e.key as MovementDirection);
        }
      }

      if (e.key === "Enter") {
        if (
          world.canInteract(world.playerEntity, {
            x: world.playerEntity.position.x + 1,
            y: world.playerEntity.position.y,
          })
        ) {
          const ret = world
            .getEntityAtPosition({
              x: world.playerEntity.position.x + 1,
              y: world.playerEntity.position.y,
            })
            ?.interact();

          ret && world.playerEntity.inventory.addItem(ret as Item);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    let frameId: number;
    const frame = (time: number) => {
      setFrameTime(time);
      frameId = requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  });

  const mapSize = 10;

  const tiles = Array.from({ length: mapSize * mapSize });

  // TODO: This might be awful for performance
  world.removeDeadEntities();

  return (
    <>
      <div
        // key={frameTime}
        style={{
          width: `${tileSize * mapSize}px`,
          height: `${tileSize * mapSize}px`,
          background: "green",
          position: "relative",
        }}
      >
        {tiles.map((_, i) => {
          const x = i % mapSize;
          const y = Math.floor(i / mapSize);

          return (
            <div
              key={i}
              style={{
                width: tileSize,
                height: tileSize,
                background: (x + y) % 2 === 0 ? "blue" : "darkblue",
                position: "absolute",
                left: x * tileSize,
                top: y * tileSize,
              }}
            >
              <div>
                {x}|{y}
              </div>
            </div>
          );
        })}
        {world.entities.map((entity, i) => {
          if (entity.isDead) return null;
          const Component = entity.component;
          return <Component key={i} position={entity.position} />;
        })}
      </div>
      {/* Poor mans inventory */}
      <div
        style={{
          width: `${tileSize * mapSize}px`,
          height: `80px`,
          border: "4px solid black",
          background: "brown",
          boxSizing: "border-box",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Inventory</span>
        {world.playerEntity.inventory.items.length === 0 && <div>Empty</div>}
        <div style={{ marginTop: "4px" }}>
          {world.playerEntity.inventory.items.map(
            (i) => `${i.amount} ${i.name}`
          )}
        </div>
      </div>
    </>
  );
};
