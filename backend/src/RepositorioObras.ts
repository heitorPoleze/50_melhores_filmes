import { Filme } from "./Filme.ts";
import { Obra } from "./Obra.ts";
import { Serie } from "./Serie.ts";

export class RepositorioObras {
    private obras: Array<Obra> = [];

    adicionar(obra: Obra): void {
        this.obras.push(obra);
    }
    listarSeries(): Serie[]{
        return this.obras.filter((obra: Obra) => {
          return obra instanceof Serie
        })
    }
    listarFilmes(): Filme[]{
       return this.obras.filter((obra: Obra) => {
            return obra instanceof Filme
        }) 
    }
    buscarPorGenero(inpGenero: string[]): Obra[] {
        return this.obras.filter(obra => inpGenero.every(genero => obra.genres.includes(genero)));
    }

    buscarPorTitulo(inpTitulo: string): Obra[] {
        return this.obras.filter(obra => obra.name.toLowerCase().includes(inpTitulo.toLowerCase()));
    }

    buscarPorNomeAtor(inpNome: string): Obra[] {
        return this.obras.filter(obra => obra.atores.some(ator => ator.name.toLowerCase().includes(inpNome.toLowerCase())))}

    buscarPorNomePersonagem(inpNome: string): Obra[] {
    return this.obras.filter(obra =>obra.atores.some(ator => ator.character.toLowerCase().includes(inpNome.toLowerCase())));
    }

    buscarPorNomeDiretor(inpNome: string): Filme[] {
        const filmes = this.obras.filter(obra => obra instanceof Filme) as Filme[];
        return filmes.filter(filme => filme.diretor.some(diretor => diretor.name.toLowerCase().includes(inpNome.toLowerCase())));
    }
}