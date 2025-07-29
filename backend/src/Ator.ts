import { Equipe } from "./Equipe.ts";

export class Ator extends Equipe {
  private _character: string;

  constructor(name: string, character: string) {
    super(name);
    this._character = character;
  }

  get character(): string {
    return this._character;
  }

  toJson(): object {
    return { ...super.toJson(), character: this.character };
  }
}
