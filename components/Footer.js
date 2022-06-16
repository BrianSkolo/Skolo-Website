import styled from 'styled-components';
import Link from "next/link";
import ClientOnly from "./clientOnly";



const FooterContainer = styled.body`  
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    width: 100%;
    color: white;
    justify-content: space-around;
    // margin-top: px;
`;

const FooterMain = styled.section`

`;

const FooterMainColumn = styled.div`
    
`;

const LogoImage = styled.img`
    cursor: pointer;
`;


const FormContainer = styled.div`

`;

const Input = styled.input`

`;

const CopyWrightContainer = styled.div`
    // margin-top: 230px;
    // margin-left: auto;
    // margin-right: 10px;
`;

const SignUpButton = styled.div`

`;

const Main = styled.section`

`;

const Social = styled.section`

`;


const Legal = styled.section`

`;

// const Header = styled.img`
//     width: 320px;
//     // align-items: center;
//     display: block;
//     cursor: pointer;
//     // margin-bottom: 20px;
// `;

function Footer() {
    return(
        <FooterContainer className="footer-container" id='footer-container'>
           
            <FooterMain>
            <FooterMainColumn>
            
                <Link class="home" href="/" id="link">
                    <LogoImage src="CroppedSkoloLogo2.png" alt="Skolo" id="skolo-image" />
                </Link>

            </FooterMainColumn>

            <FooterMainColumn>
                <ul>
                <h2 class="ft-title">Explore</h2>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/shows">Show</Link>
                <Link href="/music">Music</Link>
                <Link href="/connect">Contact</Link>
                </ul>
            </FooterMainColumn>

            <FooterMainColumn>
                <ul>
                <h2 class="ft-title">Contact</h2>
                
                </ul>
            </FooterMainColumn>

            <FooterMainColumn>
                
                <h2 class="ft-title">Stay Updated</h2>
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
                           
            <FooterMainColumn>
        
            <Social>
                <a id="facebook-link" href='https://www.facebook.com/SkoloMusic'/>
                
              

            </Social>

            </FooterMainColumn>

            <FooterMainColumn>
           
            <Legal>            

            <CopyWrightContainer>
                    &copy; 2022 Skolo. All Rights Reserved.
                </CopyWrightContainer>
            </Legal>
            </FooterMainColumn>
            </FooterMain>
            
            </FooterContainer>
    )
}

export default Footer