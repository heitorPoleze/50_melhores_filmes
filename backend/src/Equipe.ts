import { Ator } from "./Ator.ts";
import { Diretor } from "./Diretor.ts";

export class Equipe{
    private _atores: Array<Ator>;
    private _diretores: Array<Diretor>;
    constructor(atores: Array<Ator>, diretores: Array<Diretor>){
        this._atores = atores;
        this._diretores = diretores;
    }
    get atores(): Array<Ator> {
        return [...this._atores];
    }
    get diretores(): Array<Diretor> {
        return [...this._diretores];
    }

    adicionarAtor(ator: Ator): void {
        this._atores.push(ator);
    }

    adicionarDiretor(diretor: Diretor): void {
        this._diretores.push(diretor);
    }

}