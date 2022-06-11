import Link from "next/link";
import styles from '../styles/Home.module.css';       

    

function Header() {
    return (
        <div className={styles.SkoloLogo}>
            <div>
                <Link 
                    style={{backgroundColor: "transparent", border: "none"}}          
                    class="home" 
                    href="/">
                    <img 
                        className={styles.SkoloLogo} 
                        src="SkoloNoBGWhite.png" 
                        alt="Skolo"
                        />                        
                </Link>
            </div>
        </div>
        )
    }

export default Header