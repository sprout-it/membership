import Head from 'next/head'
import '../styles/globals.css'
import '../styles/Login/Login.css'
import '../styles/Vertify/Vertify.css'
import 'styles/Navbar/Navbar.css'
import 'styles/Home/Home.css'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutComponent from '../components/Layout'
import { useEffect, useState } from 'react'
import GloblaState from 'utils/GlobalState'
import Router, { useRouter } from 'next/router'

const App = ({ Component, pageProps }) => {
  const [token, setToken] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log(router.events)
    if (router.isReady && !token) Router.push('/login')
  }, [])

  return (
    <GloblaState.Provider value={{ token, setToken }}>
      <LayoutComponent>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </LayoutComponent>
    </GloblaState.Provider>
  )
}

export default App
