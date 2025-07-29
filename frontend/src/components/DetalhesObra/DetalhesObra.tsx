import style from "./DetalhesObra.module.css";

function DetalhesObra(props: any) {
  const generos = props.genres.join(", ");
const atoresInfo = props.atores
  .map((ator: any) => {
    const nome = typeof ator.name === "string" ? ator.name : JSON.stringify(ator.name);
    const personagem = typeof ator.character === "string" ? ator.character : JSON.stringify(ator.character);
    return `${nome} - ${personagem}`;
  }).join(", ");

  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <img src={props.imgLink} alt={props.name} className={style.img} />
      </div>
      <div className={style.rightSide}>
        <h1 className={style.name}>{props.name}</h1>
        <p className={style.release_date}>Lançamento: {props.release_date}</p>
        <p className={style.nota}>Nota: {props.nota}</p>
        <p className={style.genres}>Gêneros: {generos}</p>
        <div className={style.overview}>{props.overview}</div>
      </div>
    <div className={style.atores}>
       <strong>Atores:</strong> {atoresInfo}
    </div>
    </div>
  );
}

export default DetalhesObra;
