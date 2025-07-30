import style from "./Form.module.css";

function Form(props: any){
    return(
      <div className={style["formulario"]}>
      <input
        className={style["input-busca"]}
        type="text"
        placeholder={props.placeholder} 
        value={props.busca}
        onChange={(e) => props.setBusca(e.target.value)
        }
      />
      <button onClick={props.funcao}>{props.placeholder}</button>
    </div>
    )
}

export default Form;