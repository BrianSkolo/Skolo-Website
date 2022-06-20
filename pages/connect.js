import styles from '../styles/Home.module.css';
import Link from "next/link";
import styled from 'styled-components';
// import ClientOnly from '../components/clientOnly';

const HeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%; 
      // height: 100%
      border-width:2px;
      margin-top: 75px;
      color: white;
      
`;

const DatesContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%; 
`;

const TourDates = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    font-family: BebasNeue;
    font-size: 70px;
    margin-bottom: 0px
`;

const TixButton = styled.button`
    color: white;
    background-color: transparent;
    font-size: 17px;
    width: 100px;
    cursor: pointer;
    text-align: center;  
    
`;

const CommunityNewsContainer = styled.div`
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
    margin-top: 125px;
`;

const FormContainer = styled.div`   
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
    align-content: space-evenly;
    height: 10;
    width: 2000px;
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
    width: 320px;
    margin: 27.5px 0px 10px 177.5px;
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

        <DatesContainer id="dates-container">
          <TourDates id="tour" style={{ marginBottom: '0px' }}>
            Tour
          </TourDates>

          <TourDates id="dates" style={{ marginTop: '0px', marginBottom: '15px' }}>
            Dates
          </TourDates>
          
         
          <Link id="ticket-link" className="shows" href="/shows">
            <TixButton
              id="ticket-button"
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
        </DatesContainer>

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