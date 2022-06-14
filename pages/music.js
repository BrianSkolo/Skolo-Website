import styles from '../styles/Home.module.css';



function BeatportLink() {
    return (
        <>
            <div className={styles.music} style={{}}>
                <div>
                    <h1
                        style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0px', paddingTop: '25px', fontFamily: 'BebasNeue', marginBottom: '0px'}}>
                        Listen:
                    </h1>
                </div>

                <div style={{transform: 'scale(.85)',}}>
                <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a target="blank" href="https://www.beatport.com/artist/skolo/978581">
                        <img
                            style={{ width: '500px', height: '150px', objectFit: 'cover', paddingTop: '0px' }}
                            src="BeatportNoBG4.png"
                            alt="Beatport"
                        // width="100%"
                        // height="75%"
                        />
                    </a>
                </div>

                <br />

                <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center', transform: 'scale(.60)' }}>
                    <a target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                        <img
                            style={{ width: 'auto', height: '150px', objectFit: 'cover' ,paddingBottom: '20px'}}
                            src="AMLogoNoBG.png"
                            alt="Apple Music" />
                    </a>
                </div>

                <br />

                <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                        <img
                            style={{ width: '500px', height: '150px', objectFit: 'cover' }}
                            src="TraxsourceNoBG2.png"
                            alt="Traxsource" />
                    </a>
                </div>

                <br />

                <div className="flexContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                        <img
                            style={{ width: '500px', height: '150px', objectFit: 'cover', transform: 'scale(.80)' }}
                            src="SpotifyNoBG2.png"
                            alt="Spotify" />
                    </a>
                </div>
                </div>

            </div>
        </>
    )
}

export default BeatportLink