import { useEffect } from "react";
import { tileSize } from "../../gameConfig";
import { Player as P, PlayerDirection } from "../lib/Player";

export const Player = ({ playerClass }: { playerClass: P }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const handledEvents = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

      if (handledEvents.includes(e.key)) {
        e.preventDefault();
        playerClass.move(e.key as PlayerDirection);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  console.log(playerClass.currentPosition);
  // console.log("rerendered");

  return (
    <div
      style={{
        borderRadius: "50%",
        color: "purple",
        width: tileSize + "px",
        height: tileSize + "px",
        background: "purple",
        left: playerClass.currentPosition.x,
        top: playerClass.currentPosition.y,
        zIndex: 1,
        position: "absolute",
      }}
    ></div>
  );
};
