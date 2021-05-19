import { Layout } from 'antd'
import Header from './Header'
import Footer from './Footer'
const { Content } = Layout
const MembershipLayout = ({ children }) => {
    return <>
        <Header />
        <Content style={{ background: '#f0f2f5', minWidth: '100vw', minHeight: '100vh' }}>
            {children}
        </Content>
        <Footer />
    </>
}

export default MembershipLayout