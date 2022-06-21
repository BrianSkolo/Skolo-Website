import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';



const HeaderContainer = styled(Flex)`
    display: flex;
    
    justify-content: center;
    // align-items: center;
     flex-wrap: wrap;
    width: 100%; 
    // border-width:2px;
    margin-top: 60px;  
    color: white;
 
`;

// const InfoColumns = styled(Flex)`
//     display: flex;
//     flex-direction: column;
// `;

const InfoContainer = styled(Box)`
    display: flex;
    // justify-content: center;
    flex-direction: column;
  
    width: 100%
   
    // margin-bottom: 50px;
    // padding-right: 60px;
    // margin-bottom: 10px;
    transform: scale(1.1);
`;

const UpcomingShows = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: BebasNeue;
    margin: 10px;
    margin-right: 0px
    padding: 0px;
    
`;

const ShowInfo = styled.div`
display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    margin-right: 0px
    padding: 0px;
`;

const ImageContainer = styled(Box)`
    display: flex;
    // justify-content: center;
    flex-direction: column;
    // padding-left: 75px;
    width: 150%;

`;

const EventImage = styled.img`
    width: 500px;
    display: block;
    cursor: pointer;
    // padding: 20px;
    // padding-top: 30px;
    margin: auto;
    -moz-box-shadow: 0 0 5px #fff;
    -webkit-box-shadow: 0 0 5px #fff;
    box-shadow: 0px 0px 5px #fff;
    
    
`;




function Shows() {

    return (
        <HeaderContainer id="shows-container">
            <InfoContainer id="info-container">

                <UpcomingShows id="upcoming-shows">

                    Upcoming Shows:

                </UpcomingShows>

                <ShowInfo id="title">
                    The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust
                </ShowInfo>

                <ShowInfo id="address">
                    6250 Hollywood Blvd, Los Angeles CA
                </ShowInfo>
                <ShowInfo id="date">
                    July 3, 2022
                </ShowInfo>
            </InfoContainer>

            <ImageContainer id="image-container">

                <Link id="link" href="https://www.facebook.com/events/705625483884426">
                    <EventImage
                        id="image"
                        src="Unicorns.jpg"
                    />
                </Link>
            </ImageContainer>
        </HeaderContainer>
    )
}

export default Shows