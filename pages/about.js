import styles from '../styles/Home.module.css';
import styled from 'styled-components';
// import ClientOnly from '../components/clientOnly';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%; 
    font-size: x-large;    
    margin-top: 100px;
    // padding-left: 20px;
    // padding-right: 20px;
    color: white;
    margin-top; auto;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    font-size: 20px;  
`;

const InfoContainer = styled.p`
    display: flex:
    flex-direction: column;
    text-align: right;
    justify-content: right;
    align-items: right;
    width: 100%;   
    padding-right: 165px;
    margin-bottom:4px;
    
`;
const LinksContainer = styled.p`
    display: flex;
    flex-direction: row;
    text-align: right;
    justify-content: right;
    width: 100%;
    margin: 0;
    padding-right: 165px;
    

   
`;

const LabelLinks = styled.a`
    color: white;
    // padding: 0px 5px 0px 5px;
    
`;

const LinkText = styled.span`
    -moz-text-shadow: 0 0 8px #fff;
    -webkit-text-shadow: 0 0 8px #fff;
    text-shadow: 0px 0px 8px #fff
`;

const AboutTitle = styled.h1`
    margin-bottom: 0px;
    font-family: BebasNeue;
    
`;


// const AboutBioInfo = styled.div`

// `;

function About() {
    
    return (
      
            <HeaderContainer id="about_page">
                <AboutContainer id="about-container">
                    <AboutTitle>About:</AboutTitle>
                </AboutContainer>
                <InfoContainer id="skolo-bio">Skolo is a House/ Tech House / Progressive House/ Melodic techno/ Indie Dance producer and DJ from San Diego, CA with current releases on
                </InfoContainer>
                <LinksContainer>
                    &nbsp;
                    <LabelLinks id="inStereo-link" href="https://www.facebook.com/instereorecordings">                   
                       <LinkText color="red" > InStereo </LinkText>
                    </LabelLinks>,
                    &nbsp;
                    <LabelLinks id="wyldCard-link" href="https://www.facebook.com/WyldCardRecords">                   
                       <LinkText color="red" > WyldCard </LinkText>
                    </LabelLinks>
                    &nbsp;
                    and
                    &nbsp;
                    <LabelLinks href="https://www.facebook.com/latenightmunchiesmusic">
                        <LinkText color="red" > Late Night Munchies </LinkText>
                    </LabelLinks>
                    </LinksContainer>             
            </HeaderContainer>
       
    )
}

export default About