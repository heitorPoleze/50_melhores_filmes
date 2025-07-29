import { Ator } from "./Ator.ts";
import { Diretor } from "./Diretor.ts";
import { Obra } from "./Obra.ts";

export class Filme extends Obra {
    private _diretor : Array<Diretor>;   
    constructor(id: number, name: string, overview: string, imgLink: string, nota: number, atores: Array<Ator>, genres: Array<string>, release_date: string,diretor: Array<Diretor> ) {
        super(id, name, overview, imgLink, nota, atores, genres, release_date);
        this._diretor = diretor;
    }   
    get diretor(): Array<Diretor> {
        return [...this._diretor];
    }

    toString(): string {
        return super.toString() + ` \n\n ${this.diretor}`;
    }
    toJson(): object {
        return {... super.toJson(), diretor: this.diretor.map(diretor => diretor.name)};  
    }
}