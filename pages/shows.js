import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';



const HeaderContainerFlex = styled(Flex)`
    justify-content: space-evenly;
    flex-wrap: wrap;     
    color: white;
 `;

const InfoContainerBox = styled(Box)`
    // padding-top: 40px;
    // padding: 5px;
`;

const UpcomingShows = styled.h1`
    font-family: BebasNeue;
    margin-bottom: 10px;
`;

const ShowInfo = styled.div`
    // margin-bottom: 8px;
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
        <HeaderContainerFlex py={3}>
            <InfoContainerBox p={[2, 2, 3]} fontSize={[ 1, 2, 3, 4 ]}>
                <UpcomingShows id="upcoming-shows">
                    Upcoming Shows:
                </UpcomingShows>
                <ShowInfo id="title">
                    <b>The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust</b>
                </ShowInfo>
                <ShowInfo id="address">
                    6250 Hollywood Blvd, Los Angeles CA
                </ShowInfo>
                <ShowInfo id="date">
                    July 3, 2022
                </ShowInfo>
            </InfoContainerBox>
            <ImageContainerBox p={[2, 2, 3]}>
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