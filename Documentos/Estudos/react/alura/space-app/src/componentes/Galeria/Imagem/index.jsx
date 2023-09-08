import favorito from './favorito.png';
import expandir from './expandir.png';
import { styled } from 'styled-components';

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    max-width: ${props => props.$expandida ? '100%' : '446px'};
    height: 100%;
    border-radius: 25px;
    overflow: hidden;

    figcaption {
        background-color: #001634;
        color: #D9D9D9;
        padding: 16px 22px;

        h3 {
            margin: 0;
        }

        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            p {
                margin: 0;
            }
            
            div {
                display: flex;
                gap: 24px;
            
                button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }

                button:nth-child(2) {
                    display: ${props => props.$expandida ? 'none' : 'block'};
                }
            }
        }
    }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeDeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

    return (
        <Figure $expandida={expandida}>
            <img src={foto.path} alt="Imagem do espaço tirada pela Alura Space" />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>Fonte/fotógrafo/satélite</p>
                    <div>
                        <button onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeDeFavorito} alt="icone de favoritar" />
                        </button>

                        <button onClick={ () => aoZoomSolicitado(foto) }>
                            <img src={expandir} alt="icone de expandir" />
                        </button>
                    </div>
                </footer>
            </figcaption>
        </Figure>
    )
}

export default Imagem;