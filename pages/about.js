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
    text-align: right;
`;

const LabelLinks = styled.a`
    color: white;
    // padding: 0px 5px 0px 5px;
    
`;

const LinkText = styled.text`
    -moz-text-shadow: 0 0 8px #fff;
    -webkit-text-shadow: 0 0 8px #fff;
    text-shadow: 0px 0px 8px #fff;
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
                    <LabelLinks id="inStereo-link" href="https://www.facebook.com/instereorecordings" 
                    >
                        <LinkText>InStereo</LinkText> 

                    </LabelLinks>,
                &nbsp; 
                    <LabelLinks id="wyldCard-link" href="https://www.facebook.com/WyldCardRecords" 
                    >
                        <LinkText>WyldCard</LinkText> 
                    </LabelLinks>
                &nbsp; 
                    and
                    &nbsp;
                    <LabelLinks href="https://www.facebook.com/latenightmunchiesmusic" 
                    >
                        <LinkText>Late Night Munchies</LinkText> 
                    </LabelLinks>
                </InfoContainer>            
        </HeaderContainer>
        </ClientOnly>
    )
}

export default About