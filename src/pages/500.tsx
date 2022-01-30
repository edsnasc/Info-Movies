import Link from 'next/link';
import styles from '../styles/styles.module.scss'

const NotFound = () => {
    return (
        <div className={styles.errors}>
            <h1>Search result not found</h1>
            <p>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
    );
}

export default NotFound;
