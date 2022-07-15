import styled from 'styled-components';
import { Flex, Box, Heading, Button, Link } from 'rebass';
import styles from '../styles/Home.module.css';

const HeaderContainerFlex = styled(Flex)`
    flex-direction: column;
    align-items: center;
    color: white; 
    padding-top: 25px;
`;

const Listen = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-family: BebasNeue; 
    margin: 0%;
    padding-top: 0px;
    padding-bottom: 5px;
    font-weight: bold;
`;

const LinksContainerBox = styled(Box)`
    // position: relative; 
    // padding: 10px px 20px 2px;     
`;

const ListenLinksBoxes = styled(Link)`   
    
    zoom: 90%;
`;

const MusicImage = styled.img`
    width: 400px;
    display: block;
    cursor: pointer;
    padding: px;
    padding-bottom: 30px;
    padding-top: 0px;
`;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2.5,
            width: '320px',
            marginTop: 0,
            marginBottom: 0,
        }}
    />
);

function BeatportLink() {

    return (
        <HeaderContainerFlex id="header-container" width={[1, 1, 1, 1]} p={[2, 2, 3, 4]}>
            {/* <ColoredLine color="white" />     */}
            <LinksContainerBox id='links-container'>
                <Listen id="listen" style={{}}>Listen:</Listen>
                <ListenLinksBoxes target="blank" href="https://music.apple.com/us/artist/skolo/1482772924" st>
                    <MusicImage
                        id="appleMusic-image"
                        src="AMLogoNoBG.png"
                        alt="Apple Music"
                        style={{ transform: 'scale(.96)', marginBottom: '0px'}}
                    />
                </ListenLinksBoxes>
                <ListenLinksBoxes target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <MusicImage
                        id="beatport-image"
                        src="beaportLogoNoBGPNG.png"
                        alt="Beatport"
                    />
                </ListenLinksBoxes>
                <ListenLinksBoxes target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                    <MusicImage
                        id="traxsource-image"
                        src="TraxsourceNoBGCroppedSmaller.png"
                        alt="Traxsource"
                        className={styles.ListenLinksMargin}
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