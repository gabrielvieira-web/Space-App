import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json';
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Footer from "./componentes/Footer"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 98.76%);
  width: 100%;
  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada, 
        favorita: !fotoSelecionada.favorita
       })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return {
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  const filtraPorTag = (tag) => {
    const fotosFiltradas = fotos.filter( foto => foto.tagId == tag.id )
    setFotosDaGaleria(fotosFiltradas)

    if(tag.id == 0) {
      setFotosDaGaleria(fotos)
    }
  }

  const filtraPorTexto = (texto) => {
    const resultadoDoFiltro = fotos.filter( foto => {
      if(foto.titulo.indexOf(texto) >= 0) {
        return foto
      }
    })
    setFotosDaGaleria(resultadoDoFiltro)
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho filtraPorTexto={filtraPorTexto}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito}
              filtraPorTag={filtraPorTag}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
        <Footer />
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada} 
        aoCloseSelecionado={setFotoSelecionada} 
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
