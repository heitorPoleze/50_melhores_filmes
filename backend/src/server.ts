import express from "express";
import cors from "cors";
import { extrairDados, repositorioObras } from "./index.ts";
import * as fs from 'fs';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

(async () => {
  try {
    console.log("Iniciando consumo da API...");
    await extrairDados();
    console.log("Api consumida.");
    
    const jsonStringFilmes = JSON.stringify(repositorioObras.listarFilmes(), null, 2);
    const jsonStringSeries = JSON.stringify(repositorioObras.listarSeries(), null, 2);
    fs.writeFileSync('../frontend/src/filmes.json', jsonStringFilmes, "utf-8");
    fs.writeFileSync('../frontend/src/series.json', jsonStringSeries, "utf-8");
    
    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

