import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
// import Footer from "./NewFooter";
// import BackgroundLayoutImg from '../../components/BackgroundLayoutImg';


export default function Layout({ children }) {
   
    return (
        <>  
            <Header /> 
            <Navbar />  
            <main style={{ height: '100vh' }}>{children}</main>    
           
            <Footer className="new-footer" />
        </>
    );
}