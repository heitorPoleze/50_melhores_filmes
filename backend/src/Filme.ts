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

    get nomesDiretores(): string {
        if(this._diretor.length === 0){
            return "Nenhum diretor";
        }; 
        if(this._diretor.length === 1){
            return this._diretor[0].name;
        };
        return this._diretor.map(diretor => diretor.name).join(", ") + ".";
    }
    toString(): string {
        return super.toString() + ` \n\n ${this.nomesDiretores}`;
    }
    toJson(): object {
        return {... super.toJson(), diretor: this.nomesDiretores};  
    }
}