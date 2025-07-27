import style from "./Card.module.css";
import { Link } from "react-router-dom";
function Card(props: any){
    return(
        <div className={style["card"]}>
            <Link to={`/${props.type}/${props.id}`}>
                <img src={props.imgLink} alt={props.name} className={style["img"]}></img>
                <p className={style["name"]}>{props.name}</p>
            </Link>
        </div>    
    )
}

export default Card;