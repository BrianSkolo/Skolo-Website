import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from "next/link";
import { Flex, Box, Image, Heading, Button } from 'rebass';



const FooterContainerFlex = styled(Flex)`

    // position: absolute;
    // right: 0;
    // bottom:0;
    // left:0;    
    padding: 0%;
    // flex-direction: column;
    background-color: grey;
    color: white;
`;

// const RowOne = styled(Box)`
//     display: flex;
//     // flex-direction: column;
//     // flex-wrap: wrap;
//     // width:100%
// `;

const FirstColumn = styled(Box)`
    flex: .25;
    text-align: center; 
    // justify-content: center;
    // margin-top: 8px; 
    flex-direction: column;
    align-items: center;
`;

const LogoImage = styled(Image)`
    // width: 320px;
    // margin: 10px 10px 0px 52.5px;
    cursor: pointer;
    
`;

const CopyRightInfo = styled(Box)`
    // justify-content: center;
    // margin-right: 87.5px;
    // margin-top: -73.5px
    // float: right;
`;

const SecondColumn = styled(Box)`
    flex: .25;   
`;

const ExploreH2 = styled.h2`
    display: flex;
    text-align: center; 
    flex-direction: column;
    margin: 8px;   
`;

const LinkList = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;   
`;

const ThirdColumn = styled.div`
    Flex: .25;
    text-align: center; 
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width:100%;
`;

const SignUpButton = styled.button`
    width: 4%, 
    border-radius: 4px; 
    background-color: red; 
    font-family: Roboto; 
    color: white; 
    border-color: transparent;
    padding: 2px;
`;

const Input = styled.input`
    border: none;
    border-radius: 4px; 
    font-family: Roboto; 
    border-color: white;
    padding: 2px;
`;

const SocialMediaLinks = styled.div`
    margin: 0
    cursor: pointer;   
    position: relative;
    top: 5px;
`;

const SocialMediaImage = styled.img`
    height: 30px;
    width: 30px;
    margin: 0px;
    margin: 3px;
`;

function Footer() {

    return (        
            <FooterContainerFlex>
                {/* <RowOne> */}
                    <FirstColumn>                       
                        <Link href="/">
                            <LogoImage id="SkoloLogo" src="CroppedSkoloLogo2.png" alt="Skolo" />
                        </Link>                                              
                        <CopyRightInfo>&copy; 2022 Skolo. All Rights Reserved.</CopyRightInfo> 
                    </FirstColumn>
                    <SecondColumn>
                        <ExploreH2>Explore</ExploreH2>
                        <LinkList>
                            <Link href="/" className={styles.exploreLinks}>Home</Link>
                            <Link href="/about" className={styles.exploreLinks}>About</Link>
                            <Link href="/shows" className={styles.exploreLinks}>Show</Link>
                            <Link href="/music" className={styles.exploreLinks}>Music</Link>
                            <Link href="/connect" className={styles.exploreLinks}>Contact</Link>
                        </LinkList>                       
                    </SecondColumn>
                    <ThirdColumn>
                    <h2 style={{ margin: '8px' }}>Stay Updated</h2>
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
                        {/* <Contact>
                            <h2 style={{ margin: '8px' }}>Contact</h2>
                            <a id="email-link" href='brianmillarsd@gmail.com'>brianmillarsd@gmail.com</a>
                        </Contact>                        */}
                    </ThirdColumn>
                {/* </RowOne> */}
            </FooterContainerFlex>        
    )
}

export default Footer