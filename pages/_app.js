import Head from 'next/head'
import '../styles/globals.css'
import '../styles/Login/Login.css'
import '../styles/Vertify/Vertify.css'
import 'styles/Navbar/Navbar.css'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutComponent from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <LayoutComponent>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}

export default MyApp
