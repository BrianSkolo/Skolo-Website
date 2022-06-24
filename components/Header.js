import Link from "next/link";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 40px;
`;

const LogoImage = styled.img`
    width: 320px;
    display: block;
    cursor: pointer;
    
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