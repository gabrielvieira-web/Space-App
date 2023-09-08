import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos.json";
import Botao from "../../Botao";

const SecaoPopulares = styled.ul`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        gap: 24px;

        img {
            border-radius: 20px;
            height: 158px;
            width: 212px;
        }
    }
`

const Populares = () => {
    return (
        <SecaoPopulares>
            <Titulo $alinhamento="center">Populares</Titulo>
            <div>
                {fotos.map( foto => <img key={foto.id} src={foto.path} alt="foto popular" />)}
                <Botao /> 
            </div>
        </SecaoPopulares>
    )
}

export default Populares;