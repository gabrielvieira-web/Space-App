import { styled } from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    margin-bottom: 146px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        padding: 0;
    }
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, filtraPorTag }) => {
    return (
        <>
            <Tags filtraPorTag={filtraPorTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                        {fotos.map( foto => 
                            <Imagem
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito} 
                                key={foto.id} 
                                foto={foto}
                            /> 
                        )}
                    </ul>
                </SecaoFluida>

                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;