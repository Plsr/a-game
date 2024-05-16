import { tileSize } from "../../gameConfig";

type Position2D = {
  x: number;
  y: number;
};

export class Player {
  private position: Position2D;

  constructor() {
    console.log("new");
    this.position = {
      x: 0,
      y: 0,
    };
  }

  get currentPosition() {
    return this.position;
  }

  // TODO: Move tilesize out of here, this class should only be concerned with coordinates
  move(direction: PlayerDirection) {
    console.log("moving");
    switch (direction) {
      case "ArrowUp":
        this.position = {
          x: this.position.x,
          y: this.position.y - tileSize,
        };
        break;
      case "ArrowDown":
        this.position = {
          x: this.position.x,
          y: this.position.y + tileSize,
        };
        break;
      case "ArrowLeft":
        this.position = {
          x: this.position.x - tileSize,
          y: this.position.y,
        };
        break;
      case "ArrowRight":
        this.position = {
          x: this.position.x + tileSize,
          y: this.position.y,
        };
        break;
    }

    console.log(this.position);
  }
}

export type PlayerDirection =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight";
