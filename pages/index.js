// import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';

const MasterFlexContainer = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 125px;
`;

const NewReleases = styled(Box)`
  display: flex;
  justify-content: center;
  color: white; 
  font-family: BebasNeue; 
  font-size: 50px;
  font-weight: bold;
`;

const ReleaseMessage = styled(Box)`
display: flex;
justify-content: center;
color: white; 
font-size: 18.25px;
padding-top 2px;
padding-bottom 2px;
`;

const MarqueeWrapper = styled.div`
  color: white;
  font-size: 20px
  // width: 900px;
  // marquee width="500px" 
`;

const HomeFlex = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center; 
  padding-top: 5px; 
  // border-top: solid;
  // border-color: white;
`;

const NewsBoxOne = styled(Box)` 
  color: white;
  width: 300px;
  margin: 20px 25px 40px 20px;
  justify-content: space-evenly; 

`;

const MusicImage = styled.img`
    width: 300px;
    height: 300px;
    display: block;
    cursor: pointer;   
    -moz-box-shadow: 0 0 5px #fff;
    -webkit-box-shadow: 0 0 5px #fff;
    box-shadow: 0px 0px 5px #fff;  
`;

const Shows = styled(Flex)`
    justify-content: space-evenly;
    flex-wrap: wrap;     
    color: white; 
`;

const ImageContainerBox = styled(Box)`
width: 100%
`;

const EventImage = styled.img`

width: 100%;   
display: block;
cursor: pointer;
margin: 0px;
-moz-box-shadow: 0 0 5px #fff;
-webkit-box-shadow: 0 0 5px #fff;
box-shadow: 0px 0px 5px #fff;     
     
`;

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      width: '650px',
      marginTop: 0,
      marginBottom: 0,
      // opacity: '1%'

    }}
  />
);

function Home() {

  return (
    <MasterFlexContainer p={[3, 4, 4]} >
      <NewReleases  >Current Releases:</NewReleases>
      {/* <ColoredLine color="white"  />   */}
      <ReleaseMessage fontSize={[1, 2, 2, 3]}>
        CLICK ON THE ALBUM ART BELOW TO CHECK OUT THE CURRENT RELEASES:
      </ReleaseMessage>
      {/* <MarqueeWrapper>
        <marquee direction="right" >
          <span class="marquee">CLICK ON THE ALBUM ART BELOW TO CHECK OUT THE CURRENT RELEASES</span>
        </marquee>
        </MarqueeWrapper> */}
      {/* <ColoredLine color="white" style={{ marginTop: 0 }} />     */}
      <HomeFlex>
        <div width={1 / 2} px={2} >
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/once-again/3663819">
              <MusicImage
                src='RighteousRainbowsofTogethernessOnceAgain.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/cant-u-see/3503246">
              <MusicImage
                src='CantYouSeeArtwork.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/i-got-a-man-divadanielle-skolo-2021-tech-remix/3451913">
              <MusicImage
                src='INStereo_IGotAMan.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/underground-tech-house-vol-07/3613813">
              <MusicImage
                src='UnderGroundTechHouseComp.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
        </div>
        <div width={1 / 2} px={2}>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/track/say-what-i-mean/16311695">
              <MusicImage
                src='SayWhatImean.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/what-it-is/3361982">
              <MusicImage
                src='WhatItIs.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
          <NewsBoxOne>
            <Link href="https://www.beatport.com/release/best-of-2021/3601627">
              <MusicImage
                src='WildCardComp.jpg'>
              </MusicImage>
            </Link>
          </NewsBoxOne>
        </div>
      </HomeFlex>
    </MasterFlexContainer>
  )
}

export default Home 