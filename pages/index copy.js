import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

// const GUTTER_SIZE = '20%';
// const GutterContainer = styled.div`
//   width: 100%;
//   padding: 0 ${GUTTER_SIZE};
//   display: flex;
//   flex-direction: column;

// `;

const MasterFlexContainer = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 125px;
`;

const NewReleases = styled.h1`
  margin-left: 325px;
  margin-right: 325px;
  color: white; 
  font-family: BebasNeue; 
  width: 100%;
  margin: 0;
`;

const SkoloFace = styled.img`
  width: 50px;
  height: 50px;
`;

const HomeFlex = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center; 
  // flex-direction: column;  
  
  
`;

const NewsBoxOne = styled(Box)` 
  color: white;
  width: 300px;
  margin: 20px 25px 40px 20px;
  justify-content: space-evenly; 
 
`;

// const NewsTextBox = styled(Box)`
//   flex-direction: column;
//   // width: 300px;
//   display: block;
//   font-size: 13px;
//   text-align: right;
//   // padding: 0px 5px 5px 5px;
// `;

const Header = styled.h1`
  display: flex;
  font-size: 17px;
  width: 300px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: right; 
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
`;

const Shows = styled(Flex)`
    justify-content: space-evenly;
    flex-wrap: wrap;     
    color: white;
  
  
`;

const ImageContainerBox = styled(Box)`
// display: flex;
// flex-direction: row;
    max-width: 500px;



`;

const EventImage = styled.img`
display: flex;
width: 100%;   
display: block;
cursor: pointer;
margin: 0px;
-moz-box-shadow: 0 0 5px #fff;
-webkit-box-shadow: 0 0 5px #fff;
box-shadow: 0px 0px 5px #fff;     
     
`;

const ShowInfo = styled.h1`
// width: 100%;
    
display: block;
cursor: pointer;
margin: 0px;
-moz-box-shadow: 0 0 5px #fff;
-webkit-box-shadow: 0 0 5px #fff;
box-shadow: 0px 0px 5px #fff;   
`;

function Home() {

  return (
    <MasterFlexContainer >
      <HomeFlex>
        {/* <SkoloFace src='SkoloFaceNoLogo.jpg'></SkoloFace> */}
        <NewReleases >New Releases:</NewReleases>
        <div width={1 / 2} px={2}>
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
        </div>

        <ImageContainerBox >
          {/* <ShowInfo >July 3, 2022</ShowInfo> */}
          <Link id="link" href="https://www.facebook.com/events/705625483884426">
            <EventImage
              id="image"
              src="Unicorns.jpg"            
            />
          </Link>
        </ImageContainerBox>
      </HomeFlex>
    </MasterFlexContainer>
  )
}

export default Home