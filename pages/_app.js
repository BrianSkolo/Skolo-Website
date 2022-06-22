import '../styles/globals.css'
import '../styles/Home.module.css';
import Layout from '../components/Layout'
import { mediaQueries } from '../components/LayoutMedaQueres';
import styled from 'styled-components';
// import { device } from './moblileStyling';
// import useMedia from "react-media";
// import React, { useState, useEffect  } from 'react';
// import useMediaQuery from '../components/UseMediaQuery';


export default function MyApp({ Component, pageProps }) {
  
  // const matches = useMediaQuery()

  // console.log(matches)

  return (
    <Layout>    
      <Component {...pageProps} />    
    </Layout>
  );
}


