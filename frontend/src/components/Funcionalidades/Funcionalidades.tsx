function Funcionalidades(props: {
  valorBusca: string;
  setValorBusca: (valor: string) => void;
  onBuscarPersonagem: () => void;
  //onBuscarDiretor?: () => void;
  //onBuscarAtor: () => void; 
  nomePagina: string
}) {
  return (
    <>
    <h1>{props.nomePagina}</h1>
    <div>
      <input
        type="text"
        placeholder="Digite para buscar" 
        value={props.valorBusca}
        onChange={(e) => props.setValorBusca(e.target.value)}
      />

      <button onClick={props.onBuscarPersonagem}>Buscar personagem</button>
    </div>
    </>
  );
}

export default Funcionalidades;
