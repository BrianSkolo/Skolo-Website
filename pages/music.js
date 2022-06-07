import styles from'../styles/Home.module.css';

function BeatportLink() {
    return (
        <div>
            <h1 className={styles.music}>Listen:</h1>
            <a className={styles.music} target="blank" href="https://www.beatport.com/artist/skolo/978581">
                <button>
                    Beatport
                </button>
            </a>

            <br />

            <a className={styles.music} target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                <button>
                    Apple Music
                </button>
            </a>

            <br />

            <a className={styles.music} target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                <button>
                    Traxsource
                </button>
            </a>

            <br />

            <a className={styles.music} target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                <button>
                    Spotify
                </button>
            </a>
            
            <style jsx> {`       
          .beatport {
             display: flex;
             flex-direction: column;            
            }             
        `}
            </style>
        </div>
    )
}

export default BeatportLink