import styled from 'styled-components';
import { Flex } from 'rebass';
import { Box } from 'rebass/styled-components';
import { ThemeProvider } from 'emotion-theming'

const HeaderContainer = styled(Flex)`
    font-size: x-large;
    color: white;
   
`;

const InfoContainer = styled(Box)`
    display: flex:
    flex-direction: column;
    text-align: center;
    p: {3};
    width: {1/2};
    padding: 10px;
    fontSizes: [
        16px, 18px, 19px, 24, 32, 48, 64
      ],
    
`;
const LinksContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: right;
    p: {3};
    width: {1/2};
    // width: 100%;
    // margin: 0;
    padding-right: 165px;
    // p={3}
    // width={1/2}
    // color='white'
    // bg='primary'>
    // Flex
   
    

   
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
    justify-content: center;
    text-align: center;    
`;




// const AboutBioInfo = styled.div`

// `;

function AboutRebass() {
    
    return (
      
            <HeaderContainer width={1} justifyContent="center" flexDirection="column">
                
                <AboutTitle>About:</AboutTitle>
              
              
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

export default AboutRebass