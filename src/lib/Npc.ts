import { Vector2D } from "../types/math";
import { Entity } from "./Entity";
import { Npc as NpcComponent } from "../components/Npc";

export class Npc extends Entity {
  constructor(position: Vector2D) {
    super({ position: position, component: NpcComponent });
  }
}
