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
    // align-items: center;
    display: block;
    cursor: pointer;
    // margin-bottom: 20px;
`;

const FirstColumn = styled.div`
    flex: 1;
    
`;

const SkoloLogo = styled.div`
    
`;




const Explore = styled.div`
    display: flex;
    flex-direction: column;
   
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;


const StayUpdated = styled.div`

`;

const SecondColumn = styled.div`
    flex: 1;
    text-align: center; 
   

`;

const ThirdColumn = styled.div`
    Flex: 1;
    text-align: center; 
`;

const CopyRight = styled.div`

`;


const CopyRightInfo = styled.div`
    margin-left: 400px;
`;

const FourthColumn = styled.div`
    Flex: 1;
    text-align: center; 
`;

const FormContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width:100%
`;

const SignUpButton = styled.div`

`;

const Input = styled.input`

`;

const RowOne = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:100%
`;

const RowTwo = styled.div`
    display: flex;
    flex-direction: row;
    width 100%
`;

const SocialMediaLinks = styled.div`
    
   
`;

const SocialMediaImage = styled.img`
    height: ${SOCIAL_MEDIA_ICON_SIZE};
    width: ${SOCIAL_MEDIA_ICON_SIZE};
    margin-left: 0;
    margin: 0 10px;
`;

const RowThree = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    
`;


function Footer() {

    return (
        
            <FooterContainer>
                <RowOne>
                    <FirstColumn>
                        <SkoloLogo>
                            <Link href="/">
                                <LogoImage src="CroppedSkoloLogo2.png" alt="Skolo" />
                            </Link>
                        </SkoloLogo>
                    </FirstColumn>
                    <SecondColumn>
                        <Explore>
                            <h1>Explore</h1>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/shows">Show</Link>
                            <Link href="/music">Music</Link>
                            <Link href="/connect">Contact</Link>
                        </Explore>
                    </SecondColumn>

                    <ThirdColumn>
                        <Contact>
                            <h1>Contact</h1>
                            <a id="email-link" href='brianmillarsd@gmail.com'>brianmillarsd@gmail.com</a>
                        </Contact>
                    </ThirdColumn>

                    <FourthColumn>
                        <StayUpdated>
                            <h1>Stay Updated</h1>
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
                        </StayUpdated>
                    </FourthColumn>
                </RowOne>

                <RowTwo>
                    <SocialMediaLinks>

                        <Link href="/">
                            <SocialMediaImage src="FaceBookSquareResize.png" alt="Facebook" />
                        </Link>
                        <Link href="/">
                            <SocialMediaImage src="InstaGramSquareResize.png" alt="Instagram" />
                        </Link>
                        <Link className="example" href="/">
                            <SocialMediaImage src="SoundCloudCircleResize.png" alt="Sound Cloud" />
                        </Link>

                    </SocialMediaLinks>
                </RowTwo>
                <RowThree>
                    <CopyRight>
                        <CopyRightInfo>&copy; 2022 Skolo. All Rights Reserved.</CopyRightInfo>
                    </CopyRight>
                </RowThree>
            </FooterContainer>
        
    )
}

export default Footer