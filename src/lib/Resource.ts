import { Resource as ResourceComponent } from "../components/Resource";
import { Vector2D } from "../types/math";
import { Entity } from "./Entity";
import { Item } from "./Inventory";

export class Resource extends Entity {
  constructor(position: Vector2D, interactable: boolean) {
    super({ position: position, component: ResourceComponent, interactable });
  }

  interact(): Item {
    console.log("interacting");
    return this.disassamble();
  }

  disassamble() {
    this.isDead = true;
    return { name: "wood", amount: 1 } as Item;
  }
}
