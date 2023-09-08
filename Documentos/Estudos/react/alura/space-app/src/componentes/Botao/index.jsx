import { styled } from "styled-components";

const BotaoEslizado = styled.button`
    background-color: transparent;
    color: #D9D9D9;
    border: 2px solid #E88CF1;
    border-radius: 10px;
    font-size: 28px;
    padding: 14px 29px;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, #E88CF1 0%, #7B78E5 100%);
    }
`

const Botao = () => {
  return (
    <BotaoEslizado>Ver mais</BotaoEslizado>
  )
}

export default Botao;