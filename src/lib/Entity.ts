import { Vector2D } from "../types/math";

export class Entity {
  position: Vector2D;
  //TODO: This typing will shoot me in the foot later
  component: React.ComponentType<{ position: Vector2D }>;

  constructor({
    position,
    component,
  }: {
    position: Vector2D;
    component: React.ComponentType<{ position: Vector2D }>;
  }) {
    this.position = position;
    this.component = component;
  }

  get currentPosition() {
    return this.position;
  }
}
