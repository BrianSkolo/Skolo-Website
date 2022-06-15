import Link from "next/link";
import styled from 'styled-components';
import ClientOnly from "./clientOnly";

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
        <ClientOnly>
        <HeaderContainer>
            <Link class="home" href="/">
                <LogoImage src="CroppedSkoloLogo2.png" alt="Skolo" />
            </Link>
        </HeaderContainer>
        </ClientOnly>
        )
    }

export default Header