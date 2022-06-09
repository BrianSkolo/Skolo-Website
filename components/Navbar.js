import Link from "next/link";
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <>
        
        <div className={styles.navbar}>           
            <Link class="home" href="/">
                <button>Home</button>
            </Link>
            <Link class="about" href="/about">
                <button>About</button>
            </Link>
            <Link class="shows" href="/shows">
                <button>Shows</button>
            </Link>
            <Link class="music" href="/music">
                <button>Music</button>
            </Link>
            <Link class="connect" href="/connect">
                <button>Connect</button>
            </Link>   
        </div>
        
        
        </>
    )
}

export default Navbar


