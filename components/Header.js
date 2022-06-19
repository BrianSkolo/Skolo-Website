import Link from "next/link";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 40px
   
;
`;

const LogoImage = styled.img`
    width: 320px;
    // align-items: center;
    display: block;
    cursor: pointer;
    // margin-bottom: 20px;
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