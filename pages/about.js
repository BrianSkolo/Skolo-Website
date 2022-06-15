import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import ClientOnly from '../components/clientOnly';

const HeaderContainer = styled.div`
    font-size: x-large; 
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    color: white;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    // font-family: BebasNeue;
    font-size: 20px;
`;

const InfoContainer = styled.p`
    
`;


// const AboutBioInfo = styled.div`

// `;

function About() {
    return (
        <ClientOnly>
        <HeaderContainer id="about_page">
            <AboutContainer id="about-container">
                <h1 id="about-text" style={{ fontFamily: 'BebasNeue'}}>About:</h1>
            </AboutContainer>           
                <InfoContainer id="skolo-bio">Skolo is a House/ Tech House / Progressive House/ Melodic techno/ Indie Dance producer and DJ from San Diego, CA with current releases on
                &nbsp; 
                    <a id="inStereo-link" href="https://www.facebook.com/instereorecordings" 
                        style={{ color: 'white', textDecoration: 'underline' }}>
                            InStereo
                    </a>,
                &nbsp; 
                    <a id="wyldCard-link" href="https://www.facebook.com/WyldCardRecords" 
                        style={{ color: 'white', textDecoration: 'underline' }}>
                            WyldCard
                    </a>
                &nbsp; 
                    and
                    &nbsp;
                    <a href="https://www.facebook.com/latenightmunchiesmusic" 
                        style={{ color: 'white', textDecoration: 'underline' }}>
                            Late Night Munchies
                    </a>
                </InfoContainer>            
        </HeaderContainer>
        </ClientOnly>
    )
}

export default About