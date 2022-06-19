import '../styles/globals.css'
import '../styles/Home.module.css';
import Layout from '../components/Layout'
import styled from 'styled-components';
// import { device } from './moblileStyling';

// const Page = styled.div`
//   margin: auto;
//   font-family: "sans-serif";
//   text-align: center;

//   @media ${device.laptop} { 
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;



export default function MyApp({ Component, pageProps }) {
  return (
    // <Page>
    <Layout>    
      <Component {...pageProps} />    
    </Layout>
    // </Page>
    
  );
}


