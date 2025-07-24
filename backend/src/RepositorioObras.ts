import { Filme } from "./Filme.ts";
import { Obra } from "./Obra.ts";
import { Serie } from "./Serie.ts";

export class RepositorioObras {
    private obras: Array<Obra> = [];

    adicionar(obra: Obra): void {
        this.obras.push(obra);
    }

    listar(): string {
        return this.obras.map(obra => obra.toString()).join("\n\n");
    }

    listarPorGenero(inpGenero: string): string {
        return this.obras.filter(obra => obra.genres.includes(inpGenero)).map(obra => obra.toString()).join("\n\n");
    }

    listarPorName(inpName: string): string {
        return this.obras.filter(obra => 
            obra.name.toLowerCase().includes(inpName.toLowerCase())).map(obra => obra.toString()).join("\n\n");
    }

    listarSeries(): string {
        const lista = this.obras.filter((obra: Obra) => {
          return obra instanceof Serie
        }).map(obra => obra.toString()).join("\n\n");

        return "SÉRIES \n\n" + lista;
    }

    listarFilmes(): string{
       const lista = this.obras.filter((obra: Obra) => {
            return obra instanceof Filme
        }).map(obra => obra.toString()).join("\n\n");   

        return "FILMES \n\n" + lista;
    }
}