const BASE_URL = "http://localhost:3000";

export async function getObras(type: "filmes" | "series"): Promise<any[]> {
  const res = await fetch(`${BASE_URL}/${type}`);
  return res.json();
}

export async function getDetalhesObra(type: "filmes" | "series", id: number): Promise<any> {
  const res = await fetch(`${BASE_URL}/${type}/${id}`);
  return res.json();
}

export async function buscarPorPersonagem(type: "filmes" | "series", character: string): Promise<any[]> {
  const res = await fetch(`${BASE_URL}/${type}/buscar-por-personagem?character=${character}`);
  return res.json();
}