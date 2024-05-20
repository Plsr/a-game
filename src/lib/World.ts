import { Vector2D } from "../types/math";
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
      const nextPosition = { x: position.x, y: position.y - 1 };
      return !this.getEntityAtPosition(nextPosition) && nextPosition.y >= 0;
    }

    if (direction === "ArrowDown") {
      const nextPosition = { x: position.x, y: position.y + 1 };
      return (
        !this.getEntityAtPosition(nextPosition) &&
        nextPosition.y < this.dimensions.y
      );
    }

    if (direction === "ArrowLeft") {
      const nextPosition = { x: position.x - 1, y: position.y };
      return !this.getEntityAtPosition(nextPosition) && nextPosition.x >= 0;
    }

    if (direction === "ArrowRight") {
      const nextPosition = { x: position.x + 1, y: position.y };
      return (
        !this.getEntityAtPosition(nextPosition) &&
        nextPosition.x < this.dimensions.x
      );
    }

    return false;
  }

  get playerEntity(): Player {
    return this.entities.find(
      (entity) => entity instanceof Player
    )! as unknown as Player;
  }

  getEntityAtPosition(position: Vector2D): T | undefined {
    return this.entities.find((entity) => {
      return (
        entity.currentPosition.x === position.x &&
        entity.currentPosition.y === position.y
      );
    });
  }
}
