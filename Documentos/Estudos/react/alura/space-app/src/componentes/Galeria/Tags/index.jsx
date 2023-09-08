import { styled } from 'styled-components';
import tags from './tags.json';

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;

    p {
        font-size: 29px;
        color: #D9D9D9;
    }
`
const Botao = styled.button`
    background-color: rgba(217, 217, 217, 0.30);
    height: 49px;
    border-radius: 10px;
    color: #D9D9D9;
    border: 2px solid transparent;
    box-sizing: border-box;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
        border-color: #E88CF1;
    }
`

const Tags = ({ filtraPorTag }) => {
    return (
        <ContainerTags>
            <p>Busque por Tags:</p>
            {tags.map(tag => <Botao  onClick={() => filtraPorTag(tag)} key={tag.id}>{tag.titulo}</Botao>)}
        </ContainerTags>
    )
}

export default Tags;