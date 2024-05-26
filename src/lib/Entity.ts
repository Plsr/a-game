import { Vector2D } from "../types/math";

export class Entity {
  position: Vector2D;
  //TODO: This typing will shoot me in the foot later
  component: React.ComponentType<{ position: Vector2D }>;
  interactable: boolean;
  isDead: boolean = false;

  constructor({
    position,
    component,
    interactable = false,
  }: {
    position: Vector2D;
    component: React.ComponentType<{ position: Vector2D }>;
    interactable?: boolean;
  }) {
    this.position = position;
    this.component = component;
    this.interactable = interactable;
  }

  get currentPosition() {
    return this.position;
  }

  interact() {
    return {};
  }
}
