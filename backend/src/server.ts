import express from "express";
import cors from "cors";
import { extrairDados, repositorioObras } from "./index.ts";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    console.log("Iniciando extração de dados...");
    await extrairDados();
    console.log("Dados extraídos com sucesso.");

    app.get("/filmes", (req, res) => {
      res.send(repositorioObras.listarFilmes());
    });

    app.get("/series", (req, res) => {
      res.send(repositorioObras.listarSeries());
    });

    app.get("/buscar-por-genero", (req, res) => {
      const inpGenero = req.query.genero as string | string[];
      res.send(repositorioObras.buscarPorGenero(inpGenero));
    });

    app.get("/buscar-por-titulo", (req, res) => {
      const inpTitulo = req.query.titulo as string;
      res.send(repositorioObras.buscarPorTitulo(inpTitulo));
    });

    app.get("/buscar-por-ator", (req, res) => {
      const inpNome = req.query.ator as string;
      res.send(repositorioObras.buscarPorNomeAtor(inpNome));
    });

    app.get("/buscar-por-personagem", (req, res) => {
      const inpNome = req.query.personagem as string;
      res.send(repositorioObras.buscarPorNomePersonagem(inpNome));
    });

    app.get("/buscar-por-diretor", (req, res) => {
      const inpNome = req.query.diretor as string;
      res.send(repositorioObras.buscarPorNomeDiretor(inpNome));
    });

    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

