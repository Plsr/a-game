import { tileSize } from "../../gameConfig";
import { posToPx } from "../lib/Map";
import { Vector2D } from "../types/math";

export const Npc = ({ position }: { position: Vector2D }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: tileSize + "px",
        height: tileSize + "px",
        background: "green",
        left: posToPx(position.x),
        top: posToPx(position.y),
        zIndex: 1,
        position: "absolute",
      }}
    ></div>
  );
};
