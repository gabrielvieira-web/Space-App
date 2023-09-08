import { styled } from "styled-components";
import Imagem from "../Galeria/Imagem";

import fechar from "./fechar.png";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogEstilizado = styled.dialog`
  position: absolute;
  background-color: transparent;
  box-sizing: border-box;
  top: 294px;
  border: none;
  width: 100%;
  height: 740px;
  padding: 0 142px;

  form {
    button {
      position: absolute;
      top: 24px;
      right: 170px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

`

const ModalZoom = ({ foto, aoCloseSelecionado, aoAlternarFavorito }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <DialogEstilizado open={foto}>
          <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
          <form method="dialog">
            <button onClick={() => aoCloseSelecionado(null)}>
              <img src={fechar} alt="icone de fechar" />
            </button>
          </form>
        </DialogEstilizado>
      </>}
    </>
  );
};

export default ModalZoom;
