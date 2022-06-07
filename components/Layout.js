import Navbar from "./Navbar";
import Footer from "./Footer";
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
        </div>
    );
}