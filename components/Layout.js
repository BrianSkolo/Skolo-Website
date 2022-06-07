import Navbar from "./Navbar";
import Footer from "./Footer";


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
        <div className="content">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}