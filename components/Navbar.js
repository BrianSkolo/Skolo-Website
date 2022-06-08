import Link from "next/link";
import styles from '../styles/Home.module.css';

function Navbar() {
    console.log(Navbar);
    return (
        <nav>
        <div className={styles.navbar}>
            <h1 className="links">
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
         
       
        </h1>
        </div>
        </nav>
    )
}

export default Navbar


