import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.TMDB_API_KEY;

import { Ator } from "./Ator.ts";
import { Diretor } from "./Diretor.ts";
import { Filme } from "./Filme.ts";
import { RepositorioObras } from "./RepositorioObras.ts";
import { Serie } from "./Serie.ts";
import { tipoObra } from "./tipoObra.ts";

export const repositorioObras = new RepositorioObras();

async function getMelhoresObras(tipoObra: tipoObra): Promise<any[]> {
  const filmes: string[] = [];
  const series: string[] = [];

  const url = `https://api.themoviedb.org/3/${tipoObra}/top_rated?api_key=${API_KEY}&page=`;

  for (let page = 1; page <= 3; page++) {
    //cada pagina tem 20 obras
    const response: Response = await fetch(url + page);
    if (response.ok) {
      const data = await response.json();
      tipoObra === 'movie' ? filmes.push(...data.results) : series.push(...data.results);
    } else {
      throw new Error("Erro ao consultar obra " + response.status);
    }
  }
  return tipoObra === 'movie' ? filmes : series;
}

async function getAtoresEDiretores(tipoObra: tipoObra, obraId: number): Promise<{ atores: any[], diretores: any[] }> {
  const atores: string[] = [];
  const diretores: string[] = [];
  const url = `https://api.themoviedb.org/3/${tipoObra}/${obraId}/credits?api_key=${API_KEY}`;
  const response: Response = await fetch(url);
  const data = await response.json();

  data.cast.forEach((ator: any) => {
    atores.push(ator);
  });

  data.crew.forEach((tecnico: any) => {
    if (tecnico.job === "Director") {
      diretores.push(tecnico);
    }
  });
  return { atores, diretores };

}

async function getNomesDosGenerosDaObra(tipoObra: tipoObra, obraId: number): Promise<string[]> {
  const generos: string[] = [];
  const url = `https://api.themoviedb.org/3/${tipoObra}/${obraId}?api_key=${API_KEY}`;
  const response: Response = await fetch(url);
  const data = await response.json();
  data.genres.forEach((genero: any) => {
    generos.push(genero.name);
  });
  return generos;
}

async function getNumeroDeEpisodiosETemporadas(obraId: number): Promise<{ number_of_episodes: number, number_of_seasons: number }> {
  const url = `https://api.themoviedb.org/3/tv/${obraId}?api_key=${API_KEY}`;
  const response: Response = await fetch(url);
  const data = await response.json();
  return { number_of_episodes: data.number_of_episodes, number_of_seasons: data.number_of_seasons };
}
export async function extrairDados() {
  try {
    const melhoresFilmes = await getMelhoresObras('movie');
    const melhoresSeries = await getMelhoresObras('tv');

    melhoresFilmes.splice(-10);
    melhoresSeries.splice(-10);

    for (let i = 0; i < melhoresFilmes.length; i++) {
      const elencoFilmes = await getAtoresEDiretores('movie', melhoresFilmes[i].id);
      const atoresDesseFilme = elencoFilmes.atores.map((ator: any) => new Ator(ator.name, ator.character));
      const diretoresDesseFilme = elencoFilmes.diretores.map((diretor: any) => new Diretor(diretor.name));

      const elencoSeries = await getAtoresEDiretores('tv', melhoresSeries[i].id);
      const atoresDesseSerie = elencoSeries.atores.map((ator: any) => new Ator(ator.name, ator.character));
      const numeroEpisodiosETemporadas = await getNumeroDeEpisodiosETemporadas(melhoresSeries[i].id);

      repositorioObras.adicionar(new Filme(melhoresFilmes[i].id, melhoresFilmes[i].title, melhoresFilmes[i].overview, melhoresFilmes[i].poster_path, melhoresFilmes[i].vote_average, atoresDesseFilme, await getNomesDosGenerosDaObra('movie', melhoresFilmes[i].id), melhoresFilmes[i].release_date, diretoresDesseFilme));
      repositorioObras.adicionar(new Serie(melhoresSeries[i].id, melhoresSeries[i].name, melhoresSeries[i].overview, melhoresSeries[i].poster_path, melhoresSeries[i].vote_average, atoresDesseSerie, await getNomesDosGenerosDaObra('tv', melhoresSeries[i].id), melhoresSeries[i].first_air_date, numeroEpisodiosETemporadas.number_of_episodes, numeroEpisodiosETemporadas.number_of_seasons));
    }
  } catch (error) {
    console.error(error);
  }
}

//export {}