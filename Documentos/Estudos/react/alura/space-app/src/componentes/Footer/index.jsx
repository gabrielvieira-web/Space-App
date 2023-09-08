import styled from "styled-components";

const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #D9D9D9;
  background-color: #04244F;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 22px 46px;

  ul {
    display: flex;
    align-items: center;
    gap: 34px;
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
    }
  }

  p {
    font-size: 1.1rem;
    margin: 0;
  }
`

const Footer = () => {
  return (
    <FooterEstilizado>
      <ul>
        <li>
          <a href="/">
            <img src="imagens/sociais/facebook.svg" alt="icone facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="imagens/sociais/instagram.svg" alt="icone instagram" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="imagens/sociais/twitter.svg" alt="icone twitter" />
          </a>
        </li>
      </ul>

      <p>Desenvolvido por Gabriel Vieira</p>
    </FooterEstilizado>
  )
}

export default Footer;