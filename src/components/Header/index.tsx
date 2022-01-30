import styles from './styles.module.scss'
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
library.add(faSearch)

export function Header() {
    const [movie, setMovie] = useState('');
    //console.log(movie)
    return (
        <header className={styles.header}>
            <h1>Info-Movies + Series</h1>
            <ul className={styles.menuList}>
                <li><a href="/">Home</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.search}>
                <input 
                    type="text"
                    value={movie}
                    onChange={(event) => setMovie(event.target.value)} 
                    placeholder="Search..." />
                <Link href={`/results/${movie}`}>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </Link>
            </div>
        </header>
    )
}