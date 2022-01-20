import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Este Projeto foi construído para aperfeiçoar meus conhecimentos em react <span> </span>
                <span>
                    <img className={styles.icon} src="./react-brands.svg" alt="react-icon" />
                </span>
            </p>

            <div id="contact" className={styles.social}>
                <a href="https://github.com/edsnasc"><img className={styles.img} src="./github-brands.svg" alt="github" /></a>
                <a href="https://www.linkedin.com/in/edson-nascimento-5783681aa/"><img className={styles.img} src="./linkedin-brands.svg" alt="linkedin" /></a>
                <a href="https://www.facebook.com/profile.php?id=100028830764872"><img className={styles.img} src="./facebook-brands.svg" alt="facebook" /></a>
                <a href="https://www.instagram.com/edson_nascimento89/"><img className={styles.img} src="./instagram-brands.svg" alt="instagram" /></a>
            </div>

            <div className={styles.record}>
                <h1>Info-Movies + Series © 2022</h1>
                <p>Desenvolvido por Edson Nascimento</p>
            </div>
        </footer>
    ) 
}