import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';

// import { Text } from 'rebass/styled-components'

// const TextSize = styled(Text)`
//   fontSize: {[ 3, 4, 5 ]};
 
// `;

const HeaderContainer = styled(Flex)`
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 100%; 
      color: white;
      // height: 100%
      // border-width:2px;
      // margin-top: 75px;
      
      
`;

const TourAndTixContainer = styled(Box)`
    display: flex;
    flex-direction: column;  
`;

const TourDates = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    font-family: BebasNeue;
    font-size: 70px;
    // margin-top: 20px
    // margin-bottom: 0px
    
`;

const TicketLinkBox = styled(Box)`
    display: flex:
    flex-direction: column;
    justify-content: center;
    width: 100%
    // margin: 10px;
    // margin-top: 10px;  
`;

const TixButton = styled.button`
    
    margin: 0px;
    color: white;
    background-color: transparent;
    justify-content: center;
    font-size: 17px;
    cursor: pointer;
    width: 100px;
    text-align: center;  
    -moz-text-shadow: 0 0 8px #fff;
    -webkit-text-shadow: 0 0 8px #fff;
    text-shadow: 0px 0px 8px #fff
   
`;



const CommunityNewsContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    
`;

const ContactUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    margin-top: 90px;
`;

const FormContainer = styled.div`   
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
    align-content: space-evenly;
`;

const Input = styled.input`
    border: none;
    border-radius: 4px; 
    font-family: Roboto; 
    border-color: white;
    // background-color: transparent;
`;

const SignUpButton = styled.button`
    width: 4%, 
    border-radius: 4px; 
    background-color: red; 
    font-family: Roboto; 
    color: white; 
    border-color: transparent;
`;

const SocialMediaLinks = styled.div`
    display: flex:
    flex-direction: column;
    width: 100%
    margin: 10px;
    margin-top: 25px;  
    
    cursor: pointer;   
`;

const SocialMediaImage = styled.img`
    height: 50px;
    width: 50px;
    margin-left: 0; 
    margin: 0 10px;
    zoom: 70%;
`;






export default function Form() {
 
  return (

      <HeaderContainer id="header-container">
        <TourAndTixContainer>
          <TourDates id="tour" style={{ marginBottom: '0px' }}>
            Tour
          </TourDates>

          <TourDates id="dates" style={{ marginTop: '0px', marginBottom: '15px' }}>
            Dates
          </TourDates>
          
         <TicketLinkBox>
          <Link id="ticket-link" className="shows" href="/shows">
            <TixButton
               
                style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: '5px',
                borderRadius: '4px',
                transform: 'scale(1.5)'
              }}>
              Purchase Tickets
            
            </TixButton>
          </Link>
          </TicketLinkBox>
        <ContactUsContainer id="contactUs-container">          
          <CommunityNewsContainer id="communityNews-container">
            <h1
              id="Community News"
              style={{
                fontFamily: 'BebasNeue',
                transform: 'scale(2)',
                marginTop: 0,
                marginBottom: '10px'
              }}>
              Community News
            </h1>

            <h2
              id="subscribe-text"
              style={{
                fontSize: '20px',
                marginBottom: '25px'
              }}>
              Subscribe with your email address to keep up with the latest Skolo news, events, and exclusives via email.
            </h2>
          </CommunityNewsContainer >

          <FormContainer id="form-container" className={styles.form} action="/api/form" method="post">
            <label htmlFor="third">
              <Input
                type="text"
                id="email"
                placeholder='Enter your email' />
            </label>
            <SignUpButton
              id="signUp-button"
              type="submit">
              Sign Up
            </SignUpButton>
          </FormContainer>
        </ContactUsContainer>
        </TourAndTixContainer>

        <SocialMediaLinks>
          <Link href="https://www.facebook.com/SkoloMusic">
              <SocialMediaImage src="FaceBookSquareResize.png" alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/skolomusicsd/">
              <SocialMediaImage src="InstaGramSquareResize.png" alt="Instagram" />
          </Link>
          <Link className="example" href="https://soundcloud.com/skolomusic">
              <SocialMediaImage src="SoundCloudCircleResize.png" alt="Sound Cloud" />
          </Link>
      </SocialMediaLinks>

      </HeaderContainer>

  )
}