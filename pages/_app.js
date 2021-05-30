import Layout from '../component/Layout'
import '../styles/Login.css'
import '../styles/Vertify.css'
import 'antd/dist/antd.min.css'
const MyApp = ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
