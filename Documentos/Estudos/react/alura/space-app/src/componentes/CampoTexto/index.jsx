import { styled } from "styled-components";

const CampoInputEstilizado = styled.div`
    position: relative;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border: 2px solid;
    border-color: #C98CF1;
    border-radius: 10px;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`


const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ filtraPorTexto }) => {
    return (
        <CampoInputEstilizado>
            <CampoTextoEstilizado 
                onKeyUp={ e => e.code === "Enter" ? filtraPorTexto(e.target.value) : '' } 
                placeholder="O que você procura?" 
            />
            <IconeLupa src="/imagens/search.png" alt="icone lupa" />
        </CampoInputEstilizado>
    )
}

export default CampoTexto;