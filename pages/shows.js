import Link from 'next/link';
import styled from 'styled-components';
// import ClientOnly from '../components/clientOnly';


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%; 
    border-width:2px;
    margin-top: 125px;  
    color: white;
 
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    padding-right: 60px;
    margin-bottom: 10px;
    transform: scale(1.1);
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 75px;

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

const UpcomingShows = styled.h1`
    font-family: BebasNeue;
`;


function Shows() {

    return (
        <HeaderContainer id="shows-container">
            <InfoContainer id="info-container">

                <UpcomingShows id="upcoming-shows">

                    Upcoming Shows:

                </UpcomingShows>

                <p id="title">
                    The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust
                </p>

                <p id="address">
                    6250 Hollywood Blvd, Los Angeles CA
                </p>
                <p id="date">
                    July 3, 2022
                </p>
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