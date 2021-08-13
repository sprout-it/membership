import Head from 'next/head'
import '../styles/Login/Login.css'
import '../styles/Vertify/Vertify.css'
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
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}

export default MyApp
