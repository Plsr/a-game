import { MovementDirection } from "../types/movement";
import { Entity } from "./Entity";
import { Player } from "./Player";

export class World<T extends Entity> {
  entities: T[];
  dimensions: { x: number; y: number };

  constructor({ dimensions }: { dimensions: { x: number; y: number } }) {
    this.entities = [];
    this.dimensions = dimensions;
  }

  addEntity(entity: T) {
    this.entities.push(entity);
  }

  canMove(entity: T, direction: MovementDirection): boolean {
    const position = entity.currentPosition;

    if (direction === "ArrowUp") {
      return position.y - 1 >= 0;
    }

    if (direction === "ArrowDown") {
      return position.y + 1 < this.dimensions.y;
    }

    if (direction === "ArrowLeft") {
      return position.x - 1 >= 0;
    }

    if (direction === "ArrowRight") {
      return position.x + 1 < this.dimensions.x;
    }

    return false;
  }

  get playerEntity(): Player {
    return this.entities.find(
      (entity) => entity instanceof Player
    )! as unknown as Player;
  }
}
