import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';
import styles from '../styles/Home.module.css';

const HeaderContainerFlex = styled(Flex)`
    flex-direction: column;
    align-items: center;
    color: white; 
    padding-top: 30px
`;

const Listen = styled.h1`
    font-size: 50px;
    font-family: BebasNeue; 
    margin: 0%;
    font-weight: bold;
`;

const LinksContainerBox = styled(Box)`
    position: relative;      
`;

const ListenLinksBoxes = styled(Box)`   
    padding: 10px 2px 10px 2px;
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
        <HeaderContainerFlex id="header-container" width={[1, 1, 0.5, 1]}>
            <Listen id="listen" style={{ paddingBottom: '15px' }}>Listen:</Listen>
            {/* <ColoredLine color="white" />     */}
            <LinksContainerBox id='links-container'>
                <ListenLinksBoxes target="blank" href="https://www.beatport.com/artist/skolo/978581">
                    <MusicImage
                        id="beatport-image"
                        src="BeatportNoBG4.png"
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