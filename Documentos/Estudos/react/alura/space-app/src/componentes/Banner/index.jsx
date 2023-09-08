import { styled } from "styled-components";

const BannerEstilizado = styled.section`
    position: relative;
`

const ImgEstilizada = styled.img`
    width: 100%;
    height: 328px;
    border-radius: 20px;
`

const TituloEstilizado = styled.h1`
    position: absolute;
    top: 82px;
    left: 62px;
    font-size: 2.5rem;
    height: 144px;
    width: 301px;
    color: white;
`

const Banner = () => {
    return <BannerEstilizado>
        <ImgEstilizada src="/src/assets/banner.png" alt="Banner do platerra terra" />
        <TituloEstilizado>A galeria mais completa de fotos do espaço</TituloEstilizado>
    </BannerEstilizado>
}

export default Banner;