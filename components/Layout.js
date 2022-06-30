import { Flex, Box } from 'rebass';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'


const BGImageContainer = styled(Box)`
    background-image: url('/SkoloStairs1920x1080.png');   
    max-width: 1920px;    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    // position: absolute;
`;

const MainContainer = styled(Flex)`
    max-width: 1920px;
    min-height: 100vh;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.6);
    margin: 0 auto;
`;

const ContentBox = styled(Box)`
    width: 100%;    
`;


//   const Default = ({ children }) => {
//     const isNotMobile = useMediaQuery({ minWidth: 768 })
//     return isNotMobile ? children : null
//   }

export default function Layout({ children }) {
    return (
        <BGImageContainer >
            <MainContainer>
                <Header />
                <Navbar />
                <ContentBox flex={1}>{children}</ContentBox>
             
                    <Footer/>
        
              
            </MainContainer>
        </BGImageContainer>
    );
}