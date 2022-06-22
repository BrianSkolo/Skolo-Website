import styled from 'styled-components';
import { Flex } from 'rebass';
import { Box, Heading } from 'rebass/styled-components';



const HeaderContainerFlex = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    // width: 1;  
    // font-size: x-large;
    color: white;
    text-align: center;
    position: relative;
    top: 5px;
`;

const AboutTitle = styled.h1`
    position: relative;
    top: 15px;
    font-family: BebasNeue;  
    width: 100% 
   
`;

const InfoContainerBox = styled(Box)`
    display: flex:
    flex-direction: column;
    width: 100%
    margin: 10px;
    margin-top: 10px;  
   
    
`;
const LinksContainerBox = styled(Box)`
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
      
            <HeaderContainerFlex width={[1, 1, 0.5, 1]} fontSize={[ 2, 3, 3, 4 ]} >
                <AboutTitle>About:</AboutTitle>
                <InfoContainerBox id="skolo-bio">Skolo is a House/ Tech House / Progressive House/ Melodic techno/ Indie Dance producer and DJ from San Diego, CA with current releases on
                </InfoContainerBox>
                <LinksContainerBox>               
                    <LabelLinks id="inStereo-link" href="https://www.facebook.com/instereorecordings">                   
                       <LinkText color="red" > InStereo, </LinkText>
                    </LabelLinks>
                   
                    <LabelLinks id="wyldCard-link" href="https://www.facebook.com/WyldCardRecords">                   
                       <LinkText color="red" > WyldCard, </LinkText>
                    </LabelLinks>
                 
                    
                    and

                    <LabelLinks href="https://www.facebook.com/latenightmunchiesmusic">
                        <LinkText color="red" > Late Night Munchies </LinkText>
                    </LabelLinks>
                    </LinksContainerBox>             
            </HeaderContainerFlex>
       
    )
}

export default About