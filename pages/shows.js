import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';



const HeaderContainerFlex = styled(Flex)`
    justify-content: space-evenly;
    flex-wrap: wrap;     
    color: white;
    margin: 0;
 `;
 const Box1 = styled(Box)`
    flex-direction: column;

`;

const Box2 = styled(Box)`
    flex-direction: column;
`;

const InfoContainerBox = styled(Box)`
`;

const UpcomingShows = styled.h1`
    font-family: BebasNeue;
    margin: 0px;
    font-size: 50px;
   
`;

const ShowInfo = styled.div`

  
`;

const ImageContainerBox = styled(Box)`
    max-width: 500px;
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


function Shows() {
    return (
        <HeaderContainerFlex pt={[2, 2, 3, '40px']} p={[2, 2, 3, 4]} >
          
            <InfoContainerBox  fontSize={[1, 2, 3, 4]}>
                <UpcomingShows id="upcoming-shows">
                    Upcoming Shows:
                </UpcomingShows>
                {/* <ColoredLine color="white" sx={{}} />     */}
                <ShowInfo id="title">
                    <b>The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust</b>
                </ShowInfo>
                <ShowInfo id="address">
                    6250 Hollywood Blvd, Los Angeles CA
                </ShowInfo>
                <ShowInfo id="date" b>
                    July 3, 2022
                </ShowInfo>
            </InfoContainerBox>
            <ImageContainerBox >
                <Link id="link" href="https://www.facebook.com/events/705625483884426">
                    <EventImage
                        id="image"
                        src="Unicorns.jpg"
                    // width={[1, 0.25]}              
                    />
                </Link>
            </ImageContainerBox>
         

        </HeaderContainerFlex>

        
    )
}

export default Shows