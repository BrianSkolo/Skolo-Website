import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

import styled from "styled-components";




// const theme = {
//     fontSizes: [
//       12, 14, 16, 24, 32, 48, 64
//     ],
// }
// import Footer from "./NewFooter";
// import BackgroundLayoutImg from '../../components/BackgroundLayoutImg';


export default function Layout({ children }) {
   
    return (
        <>  
            <Header /> 
            <Navbar />  
            <main>{children}</main>   
            {/* <Footer className="new-footer" /> */}
        </>
    );
}