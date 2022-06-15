import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>  
            <Header /> 
            <Navbar />  
            <main>{children}</main>    
            <Footer className="new-footer" />
        </>
    );
}