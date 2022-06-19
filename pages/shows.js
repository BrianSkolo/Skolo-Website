import Link from 'next/link';
import styled from 'styled-components';
// import ClientOnly from '../components/clientOnly';


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%; 
    border-width:2px;
    margin-top: 125px;
   
    color: white;
    // align-self: flex-end;
    // justify-content: flex-start;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: left;
    // width: auto; 
    // margin-right: auto;
    margin-left: 120px ;
    transform: scale(1.30);
    margin-bottom: 50px;
`;

const ImageContainer = styled.div`
    // display: flex;
    // flex-direction: row;
    // align-items: right;
    // align-items: right;
    // width: 100%; 
    margin-left: auto;
    margin-right: 45px ;

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