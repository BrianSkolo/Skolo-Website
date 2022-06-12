import Link from "next/link";
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <>
        <nav className={styles.navbar}>
        <div className={styles.navbar}>           
            <Link className={styles.navLink} href="/">
                <button className={styles.buttonbg}>Home</button>
            </Link>
            <Link className={styles.navLink} href="/about">
                <button className={styles.buttonbg}>About</button>
            </Link>
            <Link className={styles.navLink} href="/shows">
                <button className={styles.buttonbg}>Shows</button>
            </Link>
            <Link className={styles.navLink} href="/music">
                <button className={styles.buttonbg}>Music</button>
            </Link>
            <Link className={styles.navLink} href="/connect">
                <button className={styles.buttonbg}>Contact/Booking</button>
            </Link>   
        </div>       
        </nav>
        </>
    )
}

export default Navbar


