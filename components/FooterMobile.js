import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from "next/link";
import { Flex, Box, Image, Heading, Button } from 'rebass';
import MediaQuery from 'react-responsive'


const GradientDiv = styled.div`
    background-image: linear-gradient(transparent, black);  
    
`;

const FooterContainerFlex = styled(Flex)` 
    color: white;  
    justify-content: center;  
    flex-wrap: wrap;  
    // margin-bottom: 10px;   
    
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
    justify-content: center;
    font-size: 8.5px;
    // padding-top: 2.5px;
`;




function FooterMobile() {
    return (
        <GradientDiv>
            <FooterContainerFlex  sx={{ opacity: 0,
                ':hover': {                   
                    opacity: '1',
                    transition: '0.9s',
                }
            }}>             
                <FirstColumn>
                    <Link href="/">
                        <LogoImage id="SkoloLogo" src="CroppedSkoloLogo2.png" alt="Skolo" />
                    </Link>
                    <CopyRightInfo>Copyright &copy; 2022. Skolo. All Rights Reserved.</CopyRightInfo>
                </FirstColumn>                
            </FooterContainerFlex>
        </GradientDiv>
    )
}

export default FooterMobile