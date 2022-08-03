import styled from 'styled-components';
import { Flex } from 'rebass';
import { Box, Heading } from 'rebass/styled-components';



const HeaderContainerFlex = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    // padding-top: 40px
    // margin-top: 0px;
`;

const AboutTitle = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: BebasNeue;  
    width: 100% 
    text-align: center;
    justify-content: center;
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 0px;   
    font-weight: bold;
`;

const InfoContainerBox = styled(Box)`
    display: flex:
    flex-direction: column;
    width: 100%
    margin-top: 0px; 
    padding-top: 2px;     
`;
const LinksContainerBox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 0px;    
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

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2.5,
            width: '1450px',
            marginTop: 0,
            marginBottom: 0,
        }}
    />
);

function About() {

    return (
        <HeaderContainerFlex p={[ 0, 2, 3, '24px']} fontSize={[2, 3, 3, 4]} >
            <AboutTitle>About:</AboutTitle>
            {/* <ColoredLine color="white" />   */}
            <InfoContainerBox id="skolo-bio">Skolo is a House / Tech House / Progressive House / Melodic Techno / Indie Dance Producer and DJ from San Diego, CA with current releases available on
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