import { useEffect, useState } from "react";
import { tileSize } from "../../gameConfig";
import { Player as PlayerClass } from "../lib/Player";

import { Player } from "./Player";

export const Map = ({ player }: { player: PlayerClass }) => {
  const [frameTime, setFrameTime] = useState(0);

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
          />
        );
      })}
      <Player playerClass={player} />
    </div>
  );
};