import { Ator } from "./Ator.ts";
import { Obra } from "./Obra.ts";

export class Serie extends Obra {
    private _number_of_episodes: number;
    private _number_of_seasons: number;
    
    constructor(id: number, name: string, overview: string, imgLink: string, nota: number, atores: Array<Ator>, genres: Array<string>, release_date: string, number_of_episodes: number, number_of_seasons: number){
        super(id, name, overview, imgLink, nota, atores, genres, release_date);
        this._number_of_episodes = number_of_episodes;
        this._number_of_seasons = number_of_seasons;
    } 

    get number_of_episodes(): number {
        return this._number_of_episodes;
    }
    
    get number_of_seasons(): number {
        return this._number_of_seasons;
    }

    toString(): string {
        return super.toString() + ` \n\n Nº Episodios: ${this._number_of_episodes} \n\n Nº Temporadas: ${this._number_of_seasons}`;
    }
}