import styles from '../styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components';

const ShowsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%; 
    border-width:2px;
    margin-top: 75px;
   
    color: white;
    // align-self: flex-end;
    // justify-content: flex-start;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: auto; 
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    align-items: right;
    width: 100%; 

`;

const EventImage = styled.img`
    width: 500px;
    display: block;
    cursor: pointer;
    padding: 20px;
    padding-top: 30px;
    
`;



function Shows() {
    return (
        <ShowsContainer className={styles.shows}>

            <InfoContainer>
                <h1
                    style={{ fontFamily: 'BebasNeue', }}>
                        
                        Upcoming Shows:
                        
                </h1>
                <p
                    >The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust
                </p>

                <p
                   >6250 Hollywood Blvd, Los Angeles CA
                </p>
                <p
                    >July 3, 2022
                </p>
            </InfoContainer>

            <ImageContainer>

                <Link href="https://www.facebook.com/events/705625483884426">
                    <EventImage
                        src="Unicorns.jpg"
                    
                        // width="100%"
                        // height="100%"
                        // object-fit="contain"
                    />
                </Link>

            </ImageContainer>

        </ShowsContainer>
    )

}

// const myLoader = ({ src, width, quality }) => {
//     return `${src}?w=${width}&q=${quality || 75}`
// } 

// const UnicornFlyer = (props) => {
//     return (
//         <Image 
//         loader={myLoader}
//         scr={Unicorns}
//         alt="In Unicorns We Trust"
//         width={500}
//         height={500}
//         />
//     )
// }



export default Shows