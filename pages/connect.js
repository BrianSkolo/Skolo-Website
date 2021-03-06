import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Heading, Button } from 'rebass';
import axios from 'axios';



const HeaderContainerFlex = styled(Flex)`
      flex-direction: column;
      text-align: center;
      width: 100%; 
      color: white;  
      // padding-top: 17.5px;    
`;

const TourAndTixBox = styled(Box)`
    
`;

const TourDates = styled.h1`
    width: 100%; 
    font-family: BebasNeue;
    font-size: 70px;
    margin-top: 0px;
`;

const TicketLinkBox = styled(Box)`   
    flex-direction: column;
    justify-content: center;
    width: 100% 
`;

const TixButton = styled.button`   
margin: 0px;
color: white;
border-color: white;
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
const ContactUsContainer = styled(Box)`
    position: relative;
    top: 60px;
`;

const CommunityNewsContainer = styled.div`
    flex-direction: column;
    align-items: center;
    width: 100%; 
`;

const FormContainer = styled.div`      

`;

const Input = styled.input`
    border: none;
    border-radius: 4px; 
    font-family: Roboto; 
    border-color: white;
`;

const SignUpButton = styled.button`
    width: 4%, 
    border-radius: 4px; 
    background-color: red; 
    font-family: Roboto; 
    color: white; 
    border-color: transparent;
`;

const SocialMediaLinksBox = styled(Box)` 
    position: relative;
    top: 77.5px;    
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
  const [email, setEmail] = useState('');
  const signupHandler = async () => {
    console.log(`I was clicked ${email} <--`);

    // if (!email) {
    //   alert('Please enter your name.')
    //   return false
    // }
    
    const res = await axios.post('/api/signup', {email})
    console.log(res, res.status);
    setEmail("")
  };

 
  return (
    <HeaderContainerFlex id="header-container" p={[1, 2, 3, '24px']}>
      <TourAndTixBox>
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
      </TourAndTixBox>
      <ContactUsContainer id="contactUs-container">
        <CommunityNewsContainer id="communityNews-container" >
          <h1
            id="Community News"
            style={{
              fontFamily: 'BebasNeue',
              fontSize: '65px',
              marginBottom: '0px',
              marginTop: '0px',
              // transform: 'scale(2)',
            }}>
            Community News
          </h1>
          <h2
            id="subscribe-text"
            style={{
              fontSize: '20px',
              marginTop: '0px',
            }}>
            Subscribe with your email address to keep up with the latest Skolo news, events, and exclusives via email.
          </h2>
        </CommunityNewsContainer >
        <FormContainer id="form-container" className={styles.form} action="/api/form" method="post">
          <label htmlFor="third">
            <Input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              id="email"
              value={email}
              placeholder='Enter your email' />
          </label>
          <SignUpButton
          
            onClick={signupHandler}
            id="signUp-button"
            type="submit"
            >
            Sign Up
          </SignUpButton>
        </FormContainer>
      </ContactUsContainer>
      <SocialMediaLinksBox>
        <Link href="https://www.facebook.com/SkoloMusic">
          <SocialMediaImage src="FaceBookSquareResize.png" alt="Facebook" />
        </Link>
        <Link href="https://www.instagram.com/skolomusicsd/">
          <SocialMediaImage src="InstaGramSquareResize.png" alt="Instagram" />
        </Link>
        <Link className="example" href="https://soundcloud.com/skolomusic">
          <SocialMediaImage src="SoundCloudCircleResize.png" alt="Sound Cloud" />
        </Link>
      </SocialMediaLinksBox>
    </HeaderContainerFlex>

  )
}