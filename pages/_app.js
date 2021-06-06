import Layout from '../components/Layout'
import '../styles/Login.css'
import '../styles/Vertify.css'
import '../styles/Navbar.css'
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
