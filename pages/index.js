import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';

const HomeFlex = styled(Flex)`
  // flex-direction: column;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const NewsBoxOne = styled(Box)` 
  flex-direction-column;
  color: white;
  padding: 15px 15px 15px 15px;
`;

const NewsTextBox = styled(Box)`
  flex-direction: column;
  width: 300px;
  display: block;
  font-size: 15px;
  // text-align: left;
`;

const Header = styled.h1`
  display: flex;
  font-size: 20px;
  width: 300px;
  // margin; 0px;
  
`;

const ListenLinksBoxes = styled(Box)`

`;

const MusicImage = styled.img`
    width: 300px;
    height: 300px;
    display: block;
    cursor: pointer;
    -moz-box-shadow: 0 0 5px #fff;
    -webkit-box-shadow: 0 0 5px #fff;
    box-shadow: 0px 0px 5px #fff; 
    // padding: 20px;
    // padding-bottom: 10px;
    // padding-top: 0px;
`;

function Home() {
  
  return (
    <HomeFlex>
      <NewsBoxOne>
        <Link href="https://www.beatport.com/release/once-again/3663819">
          <MusicImage
            src='RighteousRainbowsofTogethernessOnceAgain.jpg'>
            </MusicImage>
        </Link>
        <Header>
          Righteous Rainbows of Togetherness - OnceAgain (divaDanielle and Skolo Remix)
        </Header>
        <NewsTextBox>
          The Detroit techno backbone and vocal sample of Once Again will easily get every head bobbing. But when it unveils the screaming 303 acid hook, the hands get high and the booties get low! Plus, a funky remix from InStereo queen, divaDanielle, & our resident newcomer, Skolo. And a Tech House remix from Pizza & Techno's Jordan Michael & WILLAA.          
        </NewsTextBox>
      </NewsBoxOne>
      <NewsBoxOne>
        <Link href="https://www.beatport.com/release/cant-u-see/3503246">
          <MusicImage
            src='CantYouSeeArtwork.jpg'>
            </MusicImage>
        </Link>
        <Header>
          Skolo and divaDanielle - Can't You See
        </Header>
        <NewsTextBox>
          Skolo and divaDanielle team up for the great 'Can't U See'..          
        </NewsTextBox>
      </NewsBoxOne>
      <NewsBoxOne>
        <Link href="https://www.beatport.com/release/i-got-a-man-divadanielle-skolo-2021-tech-remix/3451913">
          <MusicImage
            src='INStereo_IGotAMan.jpg'>
            </MusicImage>
        </Link>
        <Header>
          Righteous Rainbows of Togetherness OnceAgain (divaDanielle and Skolo Remix)
        </Header>
        <NewsTextBox>
          divaDanielle and Skolo bring an updated techy remix to DJ Dan and divaDanielle's 2015 hit mix of "I Got A Man." One part big and bassy. One part funky throwback. Together they make a dance floor prime time banger.          
        </NewsTextBox>
      </NewsBoxOne>
    </HomeFlex>
  )
    

 
    
}

export default Home