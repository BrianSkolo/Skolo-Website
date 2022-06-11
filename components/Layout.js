import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
// import Image from 'next/image';
import styles from'../styles/Home.module.css';
import BackgroundLayoutImg from '../components/BackgroundLayoutImg/BackgroundLayoutImg';

export default function Layout({ children }) {
    return (
        <div className="layout">  
            {/* <link 
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" 
            />   */}
                 
            <BackgroundLayoutImg>

            <div>
                <Header /> 
            </div>
            <div>
                <Navbar />  
            </div>   
            <div>
                <main>{children}</main>    
            </div>    

            </BackgroundLayoutImg>

            <div>
                <Footer className="new-footer" />
            </div>
        </div>
    );
}