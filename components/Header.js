import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Image, Heading, Button } from 'rebass';

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 25px;
    // background-color: rgb(0, 0, 0, 0.3);
    background-image: linear-gradient(black, transparent);
`;

const LogoImage = styled.img`
    width: 320px;
    display: block;
    cursor: pointer;   
`;

const MainContainer = styled(Flex)`
    max-width: 1920px;
    min-height: 100vh;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.7);
    margin: 0 auto;
`;

function Header() {
    
    return (
        <HeaderContainer>
            <Link className="home" href="/">
                <LogoImage src="CroppedSkoloLogo2.png" alt="Skolo" />
            </Link>
        </HeaderContainer>
        )
    }

export default Header