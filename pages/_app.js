import Head from 'next/head'
import '../styles/Login.css'
import '../styles/Vertify.css'
import '../styles/Navbar/Navbar.css'
import '../styles/Navbar/Navbar425px.css'
import '../styles/Navbar/Navbar768px.css'
import '../styles/Navbar/Navbar1024px.css'
import '../styles/Navbar/Navbar1440px.css'
import '../styles/Navbar/Navbar1920px.css'
import '../styles/Navbar/Navbar2560px.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import LayoutComponent from '../components/Layout'
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.min.css' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <LayoutComponent>
      <Component {...pageProps} />
   </LayoutComponent>
   </>
  )
}

export default MyApp
