import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from 'next/image';
import SkoloFace from '../public/SkoloFace.jpg'
import styles from'../styles/Home.module.css';

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
            <Navbar />
            <main>{children}</main>
            <Footer />
            {/* <img 
                src="SkoloFace.jpg"
                width="1000 px"
            /> */}
        </div>
    );
}