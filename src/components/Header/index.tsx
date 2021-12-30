import styles from './styles.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Info-Movies</h1>
            <ul className={styles.menuList}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Lançamentos</a></li>
            </ul>
            <div className={styles.search}>
                <input type="search" placeholder="pesquisar..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </header>
    )
}