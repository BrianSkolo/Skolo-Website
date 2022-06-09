import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
// import Background from "./Background";
import Image from 'next/image';
import SkoloFace from '../public/SkoloFace.jpg'
import styles from'../styles/Home.module.css';
import BackgroundLayoutImg from '../components/BackgroundLayoutImg/BackgroundLayoutImg';

// import SkoloFace from "../public/images/SkoloFace.jpg";

// function HeadShot() {
//     return (
//         <>
//             <Image 
//                 src={SkoloFace} 
//                 alt="SkoloFaceVectorImage"               
//             />
//         </>
//     )
// }



export default function Layout({ children }) {
    return (
        <div className="layout">
            {/* <Background /> */}
            {/* <BackgroundLayoutImg> */}

            <Header /> 
            <Navbar />     
             
            <main>{children}</main>
            {/* </BackgroundLayoutImg>   */}
            <Footer className="new-footer"/>
            
            {/* <img 
                src="SkoloFace.jpg"
                width="1000 px"
            /> */}
        </div>
    );
}