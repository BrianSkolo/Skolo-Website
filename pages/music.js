import styles from'../styles/Home.module.css';



function BeatportLink() {
    return (
        <>
        <div className={styles.music}>
            <div>
                <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px', paddingTop: '25px'}}>
                    Listen:
                </h1>
            </div>
                
            <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>  
                <a target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <img 
                        style={{width: '500px', height: '150px', objectFit: 'cover'}}
                        src="Beatport.jpg" 
                        alt="Beatport" 
                        // width="100%"
                        // height="75%"
                    />
                </a>
            </div> 

            <br />

            <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                <a target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                    <img 
                        style={{width: '500px', height: '150px', objectFit: 'cover'}} 
                        src="Apple-Music.jpg" 
                        alt="Apple Music"/>
                </a>
            </div>

            <br />

            <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                <a target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                    <img 
                        style={{width: '500px', height: '150px', objectFit: 'cover'}} 
                        src="Traxsource.png" 
                        alt="Traxsource"/>
                </a>
            </div>

            <br />

            <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                <a target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                <img 
                    style={{width: '500px', height: '150px', objectFit: 'cover'}} 
                    src="Spotify.jpg" 
                    alt="Spotify"/>
                </a>
            </div>
         
        </div>
        </>
    )
}

export default BeatportLink