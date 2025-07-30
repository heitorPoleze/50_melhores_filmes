import express from "express";
import cors from "cors";
import { extrairDados, repositorioObras } from "./index.ts";
import { Filme } from "./Filme.ts";
import { Serie } from "./Serie.ts";

const app = express();
const PORT = 3000;
app.use(cors());
(async () => {
  try {
    console.log("Iniciando consumo da API...");
    await extrairDados();
    console.log("Api consumida.");

    app.get('/filmes/buscar-por-diretor', (req, res) => {
      const nomeDiretor = String(req.query.diretor || '');
      const filmes = repositorioObras.buscarPorNomeDiretor(nomeDiretor);
      const json = filmes.map((filme: Filme) => filme.toJson());
      res.json(json);
    });

    app.get('/filmes/buscar-por-ator', (req, res) => {
      const nomeAtor = String(req.query.ator || '');
      const filmes = repositorioObras.buscarPorNomeAtor(nomeAtor).filter(obra => obra instanceof Filme);
      const json = filmes.map((obra: Filme) => obra.toJson());
      res.json(json);
    })

    app.get('/series/buscar-por-ator', (req, res) => {
      const nomeAtor = String(req.query.ator || '');
      const series = repositorioObras.buscarPorNomeAtor(nomeAtor).filter(obra => obra instanceof Serie);
      const json = series.map((obra: Serie) => obra.toJson());
      res.json(json);
    });

    app.get('/filmes/buscar-por-genero', (req, res) => {
      const generos = req.query.generos;
      const listaGeneros = Array.isArray(generos)
  ? generos as string[] : [generos as string];
      const filmes = repositorioObras.buscarPorGenero(listaGeneros).filter(obra => obra instanceof Filme);
      const json = filmes.map((obra: Filme) => obra.toJson());
      res.json(json);
    });

    app.get('/series/buscar-por-genero', (req, res) => {
      const generos = req.query.generos;
      const listaGeneros = Array.isArray(generos)
  ? generos as string[] : [generos as string];
      const series = repositorioObras.buscarPorGenero(listaGeneros).filter(obra => obra instanceof Serie);
      const json = series.map((obra: Serie) => obra.toJson());
      res.json(json);
    });

    app.get('/filmes/buscar-por-titulo', (req, res) => {
      const titulo = String(req.query.titulo || '');
      const filmes = repositorioObras.buscarPorTitulo(titulo).filter(obra => obra instanceof Filme);
      const json = filmes.map((obra: Filme) => obra.toJson());
      res.json(json);
    });

    app.get('/series/buscar-por-titulo', (req, res) => {
      const titulo = String(req.query.titulo || '');
      const series = repositorioObras.buscarPorTitulo(titulo).filter(obra => obra instanceof Serie);
      const json = series.map((obra: Serie) => obra.toJson());
      res.json(json);
    })

    app.get('/filmes/buscar-por-personagem', (req, res) => {
      const nomePersonagem = String(req.query.character || '');
      const resultados = repositorioObras.buscarPorNomePersonagem(nomePersonagem).filter(obra => obra instanceof Filme);
      const json = resultados.map((obra: Filme) => obra.toJson());
      res.json(json);
    });

    app.get('/series/buscar-por-personagem', (req, res) => {
      const nomePersonagem = String(req.query.character || '');
      const resultados = repositorioObras.buscarPorNomePersonagem(nomePersonagem).filter(obra => obra instanceof Serie);
      const json = resultados.map((obra: Serie) => obra.toJson());
      res.json(json);
    });

    app.get('/filmes', (req, res) => {
      const filmes = repositorioObras.listarFilmes();
      const json = filmes.map((obra: Filme) => obra.toJson());
      res.json(json);
    });

    app.get('/series', (req, res) => {
      const series = repositorioObras.listarSeries();
      const json = series.map((obra: Serie) => obra.toJson());
      res.json(json);
    });

    app.get('/filmes/:id', (req, res) => {
      const id = Number(req.params.id);
      const filme = repositorioObras.listarFilmes().find((filme: Filme) => filme.id === id);
      if (filme) {
        res.json(filme.toJson());
      }
    });

    app.get('/series/:id', (req, res) => {
      const id = Number(req.params.id);
      const serie = repositorioObras.listarSeries().find((serie: Serie) => serie.id === id);
      if (serie) {
        res.json(serie.toJson());
      }
    });

    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

