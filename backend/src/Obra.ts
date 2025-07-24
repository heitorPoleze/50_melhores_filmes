import { Ator } from "./Ator.ts";

export class Obra {
    private _id: number;
    private _name: string;
    private _overview: string;
    private _genres: Array<string>;
    private _imgLink: string;
    private _nota: number;
    private _atores: Array<Ator>;
    private _release_date: string;

    constructor(id: number, name: string, overview: string, imgLink: string, nota: number, atores: Array<Ator>, genres: Array<string>, release_date: string) {
        this._id = id;
        this._name = name;
        this._overview = overview;
        this._genres = genres;
        this._imgLink = imgLink;
        this._nota = Number(nota.toFixed(2));
        this._atores = atores;
        this._release_date = release_date;
    }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get overview(): string {
        return this._overview;
    }
    get imgLink(): string {
        return this._imgLink;
    }
    get nota(): number {
        return this._nota;
    }
    get atores(): Array<Ator> {
        return [...this._atores];
    }
    get genres(): Array<string> {
        return [...this._genres];
    }
    get release_date(): string {
        return this._release_date;
    }
    get atoresInfo(): string {
        return this._atores.map(ator => ator.name + " - " + ator.character).join(", ");
    }
    get genresInfo(): string {
        return this._genres.join(`, `);
    }
    get release_dateYear(): string {
        return this._release_date.slice(0, 4);
    }
    toString(){
        return `Título: ${this._name} (${this.release_dateYear}) \n\n Sinopse: ${this._overview} \n\n Gêneros: ${this._genres} \n\n Pôster: ${this._imgLink} \n\n Nota: ${this._nota} \n\n Atores: ${this.atoresInfo}`;
    }
}