import style from "./Footer.module.css";
import Botao from "../Botao/Botao.tsx";

function Footer(){
    return(
        <footer>
            <div className={style["left"]}>
                <p>© Heitor Poleze, 2025</p>
                <p>Todos os direitos reservados</p>
            </div>
            <div className={style["center"]}>
               <a href="https://www.linkedin.com/in/heitor-poleze-coelho-dias-8ab2762b3/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
               <a href="https://github.com/heitorPoleze" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
               <a href="https://www.instagram.com/heitor.poleze/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a> 
            </div>
            <div className={style["right"]}>
                <Botao goto="/about" descricao="Sobre Mim"/>
                <a href="">Código Fonte</a>
            </div>

        </footer>
    )
}

export default Footer;