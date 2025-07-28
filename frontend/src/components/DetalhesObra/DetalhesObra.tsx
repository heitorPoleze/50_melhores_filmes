import style from "./DetalhesObra.module.css";

function DetalhesObra(props: any) {
  const generos = props.genres.join(", ");
  const atoresEPersonagens = props.atores
    .map((ator: any) => `${ator._name} - ${ator._character}`)
    .join(", ");

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
       <strong>Atores:</strong> {atoresEPersonagens}
    </div>
    </div>
  );
}

export default DetalhesObra;
