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
      if(filme){
      res.json(filme.toJson());
      }
    });

    app.get('/series/:id', (req, res) => {
      const id = Number(req.params.id);
      const serie = repositorioObras.listarSeries().find((serie: Serie) => serie.id === id);
      if(serie){
      res.json(serie.toJson());
      }
    });

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


    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

