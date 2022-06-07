import '../styles/globals.css'
import '../styles/Home.module.css';
import Layout from '../components/Layout'


export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}


