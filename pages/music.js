import styles from'../styles/Home.module.css';

function BeatportLink() {
    return (
        <>
        <div className={styles.music}>
            <h1 className={styles.music}>Listen:</h1>
                <a className={styles.music} target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <img src="Beatport.jpg" alt="Beatport"/>
                </a>

            <br />

                <a className={styles.music} target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                    <img src="Apple-Music.jpg" alt="Apple Music"/>
                </a>

            <br />

                <a className={styles.music} target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                    <img src="Traxsource.png" alt="Traxsource"/>
                </a>

            <br />

                <a className={styles.music} target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                <img src="Spotify.jpg" alt="Spotify"/>
                </a>
            
            <style jsx> {`       
          .beatport {
             display: flex;
             flex-direction: column;            
            }             
        `}
            </style>
        </div>
        </>
    )
}

export default BeatportLink