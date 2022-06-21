import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';
import styles from '../styles/Home.module.css';

const HeaderContainer = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; 
    border-width:2px;
    margin-top: 25px;
    color: white;
     
`;
const LinksContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin-top: -25px;    
`;

const MusicImage = styled.img`
    width: 400px;
    display: block;
    cursor: pointer;
    padding: 20px;
    padding-bottom: 10px;
    padding-top: 0px;
`;

const Listen = styled.h1`
    font-size: 40px;
    font-family: BebasNeue; 
`;

const ListenLinks = styled.h1`
    // height: 50px;
    // width: 50px;
    zoom: 75%;

`;

function BeatportLink() {
  
    return (
        <HeaderContainer id="header-container">
            <Listen id="listen">Listen:</Listen>
            <LinksContainer id='links-container'>
                <ListenLinks target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <MusicImage
                        id="beatport-image"
                        src="BeatportNoBG4.png"
                        alt="Beatport"
                        
                    />
                </ListenLinks>

                <ListenLinks target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                    <MusicImage
                        id="traxsource-image"
                        src="TraxsourceNoBGCroppedSmaller.png"
                        alt="Traxsource"
                        className={styles.ListenLinksMargin}

                    />
                </ListenLinks>

                <ListenLinks target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                    <MusicImage
                        id="appleMusic-image"
                        src="AMLogoNoBG.png"
                        alt="Apple Music"
                    />
                </ListenLinks>

                <ListenLinks target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                    <MusicImage
                        id="spotify-image"
                        src="SpotifyNoBG2.png"
                        alt="Spotify" 
                        />
                </ListenLinks>
            </LinksContainer>
        </HeaderContainer>
    )
}

export default BeatportLink