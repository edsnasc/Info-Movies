import styles from './styles.module.scss'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa } from '@fortawesome/free-solid-svg-icons'
// library.add(faSearch)

export function Footer() {
   return (
       <footer className={styles.footer}>
           <p>Este Projeto foi construído para aperfeiçoar todos meus conhecimentos em react <span><img className={styles.icon} src="./react-brands.svg" alt="react-icon" /></span></p>
       </footer>
   ) 
}