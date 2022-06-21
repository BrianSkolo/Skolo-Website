import styled from 'styled-components';
import { Flex } from 'rebass';
import { Box, Heading } from 'rebass/styled-components';



const HeaderContainer = styled(Flex)`
    font-size: x-large;
    color: white;
    text-align: center;
    align-items = center; 
    margin-top: 30px; 
    width: 100%
`;

const AboutTitle = styled.h1`
    margin-bottom: 0px;
    font-family: BebasNeue;  
    width: 100% 
   
`;

const InfoContainer = styled(Box)`
    display: flex:
    flex-direction: column;
    width: 100%
    margin: 10px;
    margin-top: 10px;  
   
    
`;
const LinksContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 5px;    
`;

const LabelLinks = styled.a`
    color: white;
    padding: 0px 5px 0px 5px;    
`;

const LinkText = styled.span`
    -moz-text-shadow: 0 0 8px #fff;
    -webkit-text-shadow: 0 0 8px #fff;
    text-shadow: 0px 0px 8px #fff
`;




// const AboutBioInfo = styled.div`

// `;

function About() {
    
    return (
      
            <HeaderContainer width={1} justifyContent="center" flexDirection="column">
                <AboutTitle>About:</AboutTitle>
                <InfoContainer id="skolo-bio">Skolo is a House/ Tech House / Progressive House/ Melodic techno/ Indie Dance producer and DJ from San Diego, CA with current releases on
                </InfoContainer>
                <LinksContainer>
                    {/* &nbsp; */}
                    <LabelLinks id="inStereo-link" href="https://www.facebook.com/instereorecordings">                   
                       <LinkText color="red" > InStereo </LinkText>
                    </LabelLinks>,
                    {/* &nbsp; */}
                    <LabelLinks id="wyldCard-link" href="https://www.facebook.com/WyldCardRecords">                   
                       <LinkText color="red" > WyldCard </LinkText>
                    </LabelLinks>
                    {/* &nbsp; */}
                    and
                    {/* &nbsp; */}
                    <LabelLinks href="https://www.facebook.com/latenightmunchiesmusic">
                        <LinkText color="red" > Late Night Munchies </LinkText>
                    </LabelLinks>
                    </LinksContainer>             
            </HeaderContainer>
       
    )
}

export default About