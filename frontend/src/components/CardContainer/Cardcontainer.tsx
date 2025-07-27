import Card from "../Card/Card.tsx";
import style from "./CardContainer.module.css";
function CardContainer(props: any){
    return(
    <div className={style["card-container"]}>
        {
            props.obras.map((obra: any) => {
                return (
                    <Card
                        key={obra.id}
                        type={props.type}
                        id={obra.id}
                        imgLink={obra.imgLink}
                        name={obra.name}
                    />
                )
            })
        }
    </div>
    )
}

export default CardContainer;