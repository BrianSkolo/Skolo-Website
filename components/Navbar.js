import Link from "next/link";
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <>
        <nav className={styles.navbar}>
        <div className={styles.navbar}>           
            <Link class="home" href="/">
                <button className={styles.buttonbg}>Home</button>
            </Link>
            <Link class="about" href="/about">
                <button className={styles.buttonbg}>About</button>
            </Link>
            <Link class="shows" href="/shows">
                <button className={styles.buttonbg}>Shows</button>
            </Link>
            <Link class="music" href="/music">
                <button className={styles.buttonbg}>Music</button>
            </Link>
            <Link class="connect" href="/connect">
                <button className={styles.buttonbg}>Contact/Booking</button>
            </Link>   
        </div>       
        </nav>
        </>
    )
}

export default Navbar


