import { useEffect, useState } from "react";
import { tileSize } from "../../gameConfig";

import { World } from "../lib/World";
import { Entity } from "../lib/Entity";
import { MovementDirection } from "../types/movement";

export const Map = ({ world }: { world: World<Entity> }) => {
  const [frameTime, setFrameTime] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const handledEvents = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

      if (handledEvents.includes(e.key)) {
        e.preventDefault();
        if (world.canMove(world.playerEntity, e.key as MovementDirection)) {
          world.playerEntity.move(e.key as MovementDirection);
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

  return (
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
        const Component = entity.component;
        return <Component key={i} position={entity.position} />;
      })}
    </div>
  );
};
