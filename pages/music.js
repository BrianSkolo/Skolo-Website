import styles from '../styles/Home.module.css';

import styled from 'styled-components';
import ClientOnly from '../components/clientOnly';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; 
    border-width:2px;
    margin-top: 75px;
    color: white;
     
`;
const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;                    
`;

const MusicImage = styled.img`
    width: 500px;
    display: block;
    cursor: pointer;
    padding: 20px;
    padding-top: 30px;
`;

const Listen = styled.h1`
    font-size: 40px;
    font-family: BebasNeue; 
`;


function BeatportLink() {
    return (
        
            <ClientOnly id="styled-components-render"> 
            <HeaderContainer id="header-container">  
                            
                <Listen id="listen">

                    Listen:

                </Listen> 
                
                <LinksContainer>
                    <a target="blank" href="https://www.beatport.com/artist/skolo/978581">
                        <MusicImage 
                            id="beatport-image"
                            src="BeatportNoBG4.png"
                            alt="Beatport"  
                            style={{ paddingTop: '0px'}}                      
                        />
                    </a>  

                    <a target="blank" href="https://www.traxsource.com/artist/612812/skolo">
                        <MusicImage 
                            id="traxsource-image"                          
                            src="TraxsourceNoBGCroppedSmaller.png"
                            alt="Traxsource"
                            
                        />
                    </a>              
                      
                    <a target="blank" href="https://music.apple.com/us/artist/skolo/1482772924">
                        <MusicImage  
                            id="appleMusic-image"                          
                            src="AMLogoNoBG.png"                           alt="Apple Music" 
                        />
                    </a>
                                         
                    <a target="blank" href="https://open.spotify.com/artist/3E2JNTaM9NCiwA2TjvyxHw">
                        <MusicImage
                            id="spotify-image"
                            src="SpotifyNoBG2.png"
                            alt="Spotify" />
                    </a>
               
                </LinksContainer>

            </HeaderContainer>
            </ClientOnly>
    )
}

export default BeatportLink