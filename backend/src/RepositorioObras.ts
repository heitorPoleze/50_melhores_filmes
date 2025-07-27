import { Filme } from "./Filme.ts";
import { Obra } from "./Obra.ts";
import { Serie } from "./Serie.ts";

export class RepositorioObras {
    private obras: Array<Obra> = [];

    adicionar(obra: Obra): void {
        this.obras.push(obra);
    }
    listarSeries(): object{
        return this.obras.filter((obra: Obra) => {
          return obra instanceof Serie
        }).map(obra => obra.toJson());
    }
    listarFilmes(): object{
       return this.obras.filter((obra: Obra) => {
            return obra instanceof Filme
        }).map(obra => obra.toJson());   
    }
    buscarPorGenero(inpGenero: string | string[]): string {
        if(!Array.isArray(inpGenero)){
        return this.obras.filter(obra => obra.genres.includes(inpGenero)).map(obra => obra.toString()).join("\n\n");
        }
        return this.obras.filter(obra => inpGenero.every(genero => obra.genres.includes(genero))).map(obra => obra.toString()).join("\n\n");
    }

    buscarPorTitulo(inpTitulo: string): string {
        return this.obras.filter(obra => 
            obra.name.toLowerCase().includes(inpTitulo.toLowerCase())).map(obra => obra.toString()).join("\n\n");
    }

    buscarPorNomeAtor(inpNome: string): string {
        return this.obras.filter(obra => obra.atores.some(ator => ator.name.toLowerCase().includes(inpNome.toLowerCase()))).map(obra => obra.toString()).join("\n\n");
    }
    buscarPorNomePersonagem(inpNome: string): string {
        return this.obras.filter(obra => obra.atores.some(ator => ator.character.toLowerCase().includes(inpNome.toLowerCase()))).map(obra => obra.toString()).join("\n\n");
    }
    buscarPorNomeDiretor(inpNome: string): string {
        const filmes = this.obras.filter(obra => obra instanceof Filme) as Filme[];
        return filmes.filter(filme => filme.diretor.some(diretor => diretor.name.toLowerCase().includes(inpNome.toLowerCase()))).map(filme => filme.toString()).join("\n\n");
    }
}