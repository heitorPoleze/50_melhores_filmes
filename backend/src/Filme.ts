import { Diretor } from "./Diretor.ts";
import { Equipe } from "./Equipe.ts";
import { Obra } from "./Obra.ts";

export class Filme extends Obra {
    constructor(id: number, name: string, overview: string, imgLink: string, nota: number, equipe: Equipe, genres: Array<string>, release_date: string ) {
        super(id, name, overview, imgLink, nota, equipe, genres, release_date);
    }   

    get diretor(): Array<Diretor> {
        return [...this.equipe.diretores];
    }

    toString(): string {
        return super.toString() + ` \n\n ${this.diretor}`;
    }
    toJson(): object {
        return {... super.toJson(), diretor: this.diretor.map(diretor => diretor.name)};  
    }
}