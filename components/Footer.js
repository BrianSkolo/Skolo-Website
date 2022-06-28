import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from "next/link";
import { Flex, Box, Image, Heading, Button } from 'rebass';

const GradientDiv = styled.div`
    background-image: linear-gradient(transparent, black);    
`;

const FooterContainerFlex = styled(Flex)` 
    color: white;  
    justify-content: center;  
    flex-wrap: wrap;         
`;

const FirstColumn = styled(Box)`  
    display: flex;
    margin-right: 14px; 
    flex-direction: column;
    justify-content: center;
`;

const LogoImage = styled(Image)`
    width: 262.5px;
    // padding-top: 25px;
    cursor: pointer;  
    padding-bottom: 2px 
   
`;

const CopyRightInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 8.5px;
    // padding-top: 2.5px;
`;

const SecondColumn = styled(Box)`
    text-align: center; 
    flex-direction: column;
    align-items: center;
`;

const LinkList = styled(Box)`
    display: flex;
    flex-direction: column;   
    font-size: 15px; 
    padding-top: 7.5px;
    padding-bottom: 5px;
    text-align: center;

`;

const ThirdColumn = styled(Box)`
    display: flex;
    justify-content: center;
    margin-left: 17.5px;  
    flex-direction: column; 
    // padding-top: 17.5px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    padding-top: 2px;  
    padding-bottom: 2px;
`;

const SignUpButton = styled.button`   
    border-radius: 4px; 
    background-color: transparent; 
    font-family: Roboto; 
    color: white; 
    border-color: white;
    height: 20px;
    // width: 50px 
    // text-align: center;
    
`;

const Input = styled.input`
    border: none;
    border-radius: 4px; 
    font-family: Roboto; 
    border-color: white;
    // padding: 2px;
    
`;

const SocialMediaLinks = styled(Box)`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;   
    margin-top: 3px;  
`;

const SocialMediaImage = styled.img`
    height: 19.5px;
    width: 19.5px;
    // margin: 0px;
    // margin: 3px;
    // padding-top: 5px;
    // padding-bottom: 5px;
`;

const FooterContainerFlex2 = styled(Flex)`
    background-color: transparent;
    color: white;  
    justify-content: center;  
    background-color: rgb(0, 0, 0, 0.1.5);
`;

function Footer() {
    return (
        <GradientDiv>
            <FooterContainerFlex sx={{
                opacity: 0,
                ':hover': {
                    opacity: '1',
                    transition: '0.8s',
                }
            }}>
                <FirstColumn>
                    <Link href="/">
                        <LogoImage id="SkoloLogo" src="CroppedSkoloLogo2.png" alt="Skolo" />
                    </Link>
                    <CopyRightInfo>Copyright &copy; 2022. Skolo. All Rights Reserved.</CopyRightInfo>
                </FirstColumn>
                <SecondColumn>
                    <LinkList>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/shows">Show</Link>
                        <Link href="/music">Music</Link>
                        <Link href="/connect">Contact</Link>
                    </LinkList>
                    {/* <Contact>
                            <h2 style={{ fontSize: '15px' }}>Contact:</h2>
                            <a id="email-link" href='mailto:brianmillarsd@gmail.com' style={{ fontSize: '15px' }}>brianmillarsd@gmail.com</a>
                        </Contact>                                     */}
                </SecondColumn>
                <ThirdColumn>
                    <h2 style={{ fontSize: '17px', margin: '0px' }}>Stay Updated</h2>
                    <FormContainer id="form-container" action="/api/form" method="post">

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
                </ThirdColumn>
            </FooterContainerFlex>
        </GradientDiv>
    )
}

export default Footer