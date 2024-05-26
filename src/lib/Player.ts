import { Vector2D } from "../types/math";
import { Entity } from "./Entity";
import { Player as PlayerComponent } from "../components/Player";
import { MovementDirection } from "../types/movement";
import { Inventory } from "./Inventory";

export class Player extends Entity {
  inventory: Inventory;

  constructor(position: Vector2D) {
    super({ position: position, component: PlayerComponent });
    this.inventory = new Inventory();
  }

  move(direction: MovementDirection) {
    console.log("moving");
    switch (direction) {
      case "ArrowUp":
        this.position = {
          x: this.position.x,
          y: this.position.y - 1,
        };
        break;
      case "ArrowDown":
        this.position = {
          x: this.position.x,
          y: this.position.y + 1,
        };
        break;
      case "ArrowLeft":
        this.position = {
          x: this.position.x - 1,
          y: this.position.y,
        };
        break;
      case "ArrowRight":
        this.position = {
          x: this.position.x + 1,
          y: this.position.y,
        };
        break;
    }

    console.log(this.position);
  }
}
