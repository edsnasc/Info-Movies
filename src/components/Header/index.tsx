import { useEffect, useRef, useState} from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

import styles from './styles.module.scss'

export function Header() {
    const buttonClick = useRef(null)

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            buttonClick.current.click() 
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

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
                <Link href={`/results/${movie}`} >
                    <button ref={buttonClick}><FontAwesomeIcon icon={faSearch} /></button>
                </Link>
            </div>
        </header>
    )
}