import styled from 'styled-components';
import Link from "next/link";
import ClientOnly from "./clientOnly";



const FooterContainer = styled.body`  
    display: flex;    
    flex-direction: column;
    // flex-direction: row;
    width: 100%;
    color: white;
    background-color: grey;
    height:100vh
   
    // margin-top: 50px;
    margin: 0;
    // margin-bottom: 50px;
    
`;

const FooterMain = styled.section`
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // justify-content: space-around;
    justify-content: space-evenly;
    
`;

const FooterMainColumn = styled.div`
    padding: 1.25rem;
    min-width: 12.5rem
`;

const FooterTitles = styled.h2`
    
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Contact = styled.div`

`;

const LogoImage = styled.img`
    width: 200px;
    display: block;
    cursor: pointer;
    margin-top: 35px;
`;

const Explore = styled.ul`
    // display: flex;
    // flex-direction: column;
   
    
    
`;


const FormContainer = styled.div`

`;

const Input = styled.input`

`;

const CopyWrightContainer = styled.div`
    // margin-top: auto;
    // margin-left: auto;
    // // margin-right: auto;
`;

const SignUpButton = styled.div`

`;

// const Main = styled.section`

// `;

const Social = styled.section`
    color: white
`;


const Legal = styled.section`

`;


function Footer() {
    return(
        <FooterContainer className="footer-container" id='footer-container'>
            <FooterMain id="footer-main">
            <FooterMainColumn id="footer-main-column">
            
                <Link class="home" href="/" id="link">
                    <LogoImage src="CroppedSkoloLogo2.png" alt="Skolo" id="skolo-image" />
                </Link>

            </FooterMainColumn>

            <FooterMainColumn id="footer-main-column">
                <Explore id="explore">
                <FooterTitles class="ft-title">Explore</FooterTitles>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/shows">Show</Link>
                <Link href="/music">Music</Link>
                <Link href="/connect">Contact</Link>
                </Explore>
            </FooterMainColumn>

            <FooterMainColumn id="footer-main-column">
                <Contact id="footer-contact">
                <FooterTitles class="ft-title">Contact</FooterTitles>
                <a id="email-link" href='brianmillarsd@gmail.com'>brianmillarsd@gmail.com</a>
                </Contact>
            </FooterMainColumn>

            <FooterMainColumn id="footer-main-column">
                <FooterTitles class="ft-title">Stay Updated</FooterTitles>
                <p>Subscribe to get latest Skolo News</p>
                <FormContainer 
                    id="form-container" 
                    
                    action="/api/form" method="post"
                >
                <label htmlFor="third">
                <Input
                    type="text"
                    id="email"
                    placeholder='Enter your email' 
                />
                </label>

                <SignUpButton
                    id="signUp-button"
                    type="submit">

                    Sign Up

                </SignUpButton>
                </FormContainer>
            </FooterMainColumn>
                           
            <FooterMainColumn id="footer-main-column">
        
            <Social id="social-media-links">
                <FooterTitles>Social Media Links</FooterTitles>
                <LinksContainer>
                <a id="facebook-link" href='https://www.facebook.com/SkoloMusic'>
                    <image 
                        id="facebook-image"                          
                        src="FaceBookSquare.png"                     
                        alt="Facebook Link" 
                    />
                </a>
                <a id="instagram-link" href='https://www.instagram.com/skolomusicsd'>
                    <image
                        id="instagram-image"                          
                        src="InstaGramSquare.png"                     
                        alt="instagram Link" 
                    />
                </a>
                <a id="facebook-link" href='https://soundcloud.com/skolomusic'>
                    <image></image>
                </a>
                </LinksContainer>
            </Social>

            </FooterMainColumn>

            <FooterMainColumn id="footer-main-column">
           
            <Legal>            

            <CopyWrightContainer>
                    <p style={{ marginLeft: '400px' }}>&copy; 2022 Skolo. All Rights Reserved.</p>
                </CopyWrightContainer>
            </Legal>
            </FooterMainColumn>
            </FooterMain>
      
            
            </FooterContainer>
    )
}

export default Footer