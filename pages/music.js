import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';
import styles from '../styles/Home.module.css';

const HeaderContainerFlex = styled(Flex)`
    flex-direction: column;
    align-items: center;
    // width: 100%; 
    color: white; 
    position: relative;
    top: 50px;   
`;

const Listen = styled.h1`
    font-size: 40px;
    font-family: BebasNeue; 
    margin: 0%;
`;

const LinksContainerBox = styled(Box)`
    position: relative;
    top: -20px;   
    // display: flex;
    // flex-direction: column;
    // justify-content: center;  
    // margin-top: -25px;    
`;

const ListenLinksBoxes = styled(Box)`
    // height: 50px;
    // width: 50px;
    padding: 20px;
    margin: 0px;
    zoom: 90%;
`;

const MusicImage = styled.img`
    width: 400px;
    display: block;
    cursor: pointer;
    padding: 20px;
    padding-bottom: 10px;
    padding-top: 0px;
`;

function BeatportLink() {
  
    return (
        <HeaderContainerFlex id="header-container" width={[1, 1, 0.5, 1]}>
            <Listen id="listen">Listen:</Listen>
            <LinksContainerBox id='links-container'>
                <ListenLinksBoxes target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <MusicImage
                        id="beatport-image"
                        src="BeatportNoBG4.png"
                        alt="Beatport"
                        style={{position: 'relative', top: '15px', paddingTop: '0px'}}                        
                    />
                </ListenLinksBoxes>
                <ListenLinksBoxes target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                    <MusicImage
                        id="traxsource-image"
                        src="TraxsourceNoBGCroppedSmaller.png"
                        alt="Traxsource"
                        className={styles.ListenLinksMargin}
                        style={{position: 'relative', top: '5px'}}
                        

                    />
                </ListenLinksBoxes>
                <ListenLinksBoxes target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                    <MusicImage
                        id="appleMusic-image"
                        src="AMLogoNoBG.png"
                        alt="Apple Music"
                    />
                </ListenLinksBoxes>
                <ListenLinksBoxes target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                    <MusicImage
                        id="spotify-image"
                        src="SpotifyNoBG2.png"
                        alt="Spotify" 
                        />
                </ListenLinksBoxes>
            </LinksContainerBox>
        </HeaderContainerFlex>
    )
}

export default BeatportLink