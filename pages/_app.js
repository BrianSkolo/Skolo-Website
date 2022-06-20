import '../styles/globals.css'
import '../styles/Home.module.css';
import Layout from '../components/Layout'
import { mediaQueries } from '../components/LayoutMedaQueres';
import styled from 'styled-components';
// import { device } from './moblileStyling';


export default function MyApp({ Component, pageProps }) {
  return (
    // <Page>
   
    <Layout >    
      <Component {...pageProps} />    
    </Layout>
   
    // </Page>
    
  );
}


