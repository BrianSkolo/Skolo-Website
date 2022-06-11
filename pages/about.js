import styles from'../styles/Home.module.css';

function About() {
    return (
        <div className={styles.about} id="about_page">
            <div className={styles.aboutHeader}>
                <h1>About:</h1>
            </div>
            <div className={styles.aboutBio}>
                <p>Skolo is a House/ Tech House / Progressive House/ Melodic techno/ Indie Dance producer and DJ from San Diego, CA with current releases on InStereo, WyldCard, and Late Night Munchies.</p>
            </div>
        </div>
    )
}

export default About