import styles from '../styles/Home.module.css';

import styled from 'styled-components';
import Link from "next/link";

const SOCIAL_MEDIA_ICON_SIZE = '50px';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    color: white;
    padding: 32px 18px;

    h1 {
        margin-top: 10px;
        margin-bottom: 0;
        padding-bottom: 26px;
    }
`;

const LogoImage = styled.img`
    width: 320px;
    margin: 10px 10px 10px 52.5px;
    display: block;
    cursor: pointer;
    // margin-bottom: 20px;
`;

const FirstColumn = styled.div`
    flex: 1;
`;

const Explore = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;   
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const SecondColumn = styled.div`
    flex: 1;
    text-align: center; 
   

`;

const ThirdColumn = styled.div`
    Flex: 1;
    text-align: center; 
`;

const CopyRightInfo = styled.div`
    margin-right: 87.5px;
    margin-top: -73.5px
`;

const FourthColumn = styled.div`
    Flex: 1;
    text-align: center; 
    height: 50%;
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

const RowOne = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:100%
`;


const SocialMediaLinks = styled.div`
    width: 320px;
    margin: 15px 20px 10px 115px;
    
    // display: block;
    cursor: pointer;   
`;

const SocialMediaImage = styled.img`
    height: ${SOCIAL_MEDIA_ICON_SIZE};
    width: ${SOCIAL_MEDIA_ICON_SIZE};
    margin-left: 0;
    margin: 0 10px;
`;

const RowTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    
`;


const LinkList = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;  
    width: 100%;  
    padding: 0px;
    margin: 0px;
    transform: scale(1);

    
`;



function Footer() {

    return (        
            <FooterContainer>
                <RowOne>
                    <FirstColumn>                       
                            <Link href="/">
                                <LogoImage id="SkoloLogo" src="CroppedSkoloLogo2.png" alt="Skolo" />
                            </Link>                       
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
                    </FirstColumn>
                    <SecondColumn>
                        <Explore>
                            <h2 style={{ margin: '8px' }}>Explore</h2>
                        </Explore>                           
                        <LinkList>
                            <Link href="/" className={styles.exploreLinks}>Home</Link>
                            <Link href="/about" className={styles.exploreLinks}>About</Link>
                            <Link href="/shows" className={styles.exploreLinks}>Show</Link>
                            <Link href="/music" className={styles.exploreLinks}>Music</Link>
                            <Link href="/connect" className={styles.exploreLinks}>Contact</Link>
                        </LinkList>                       
                    </SecondColumn>

                    <ThirdColumn>
                        <Contact>
                            <h2 style={{ margin: '8px' }}>Contact</h2>
                            <a id="email-link" href='brianmillarsd@gmail.com'>brianmillarsd@gmail.com</a>
                        </Contact>
                    </ThirdColumn>

                    <FourthColumn>                      
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
                       
                    </FourthColumn>
                </RowOne>

                <RowTwo>                   
                        <CopyRightInfo>&copy; 2022 Skolo. All Rights Reserved.</CopyRightInfo>                   
                </RowTwo>
            </FooterContainer>
        
    )
}

export default Footer