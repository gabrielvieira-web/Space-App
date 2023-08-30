import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss"

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input type="text" name="" id="" placeholder="O que você procura?" className={styles.cabecalho__input} />
                <img src={search} alt="Icone de Lupa" />
            </div> 
        </header>
    )
}