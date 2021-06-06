import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, Col, Row, Button, Typography, Card } from 'antd';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import useTranslation from 'next-translate/useTranslation'
// import GlobalState from '../utils/globalState'

const { Header, Content, Footer } = Layout;
const LayoutComponent = ({ children }) => {
    // const { menuIndex, setMenuIndex } = useContext(GlobalState)
    // const { pathname } = useRouter()
    // const { t, lang } = useTranslation()

    return (
        <Layout className="layout" style={{ minHeight: '100vh', padding: 0, margin: 0, background: '#fff', width: '100%' }}>
            <Row align='middle'>
                <Col xs={0} sm={0} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 7, offset: 1 }}>
                    <Row justify='center' align='middle' style={{ padding: 10 }} gutter={5}>
                        <Col>
                            <img
                                src="/icons/sprout.svg"
                                alt="sprout"
                                width='50%'
                                height='50%'
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 19, offset: 2 }} sm={{ span: 19, offset: 2 }} md={{ span: 12, offset: 2 }} xl={{ span: 10, offset: 4 }} xxl={{ span: 7, offset: 5 }} >
                    <Row justify='end' align='bottom' wrap={false}>
                        <Button style={{ borderRadius: 50, margin: 5 }} type='ghost'>Sign In</Button>
                        <Link href='/account'><Button className='signup-button' style={{ borderRadius: 50,border:0, margin: 5, background: '#35b729' }} type='primary'>Sign UP</Button></Link>
                    </Row>
                </Col>
            </Row>
            <Header style={{ padding: 0, margin: 0, width: '100%',height:90 }}>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <FontAwesomeIcon icon={faBars} color='#ffffff'></FontAwesomeIcon>
                    </label>
                    <ul className='navbar-menu' style={{ marginRight: 110 }}>
                        <li><Link href='/'><a className='active'>home</a></Link></li>
                        <li><Link href='/membership'><a className='active'>membership</a></Link></li>
                        <li><Link href='/mybag'><a className='active'>logistic</a></Link></li>
                    </ul>
                </nav>
            </Header>
            <Content style={{ padding: 0, marginTop: -22 }}>
                {children}
            </Content>
            <Footer style={{ paddingTop: 60, paddingBottom: 30, margin: 0, backgroundColor: "white" }}>
            </Footer>
            <Row justify='center' style={{ padding: 5, background: '#35b729', color: '#fff' }}>
                <Col xs={0} sm={0} md={24} lg={24} xl={24} xxl={24}>
                    <Row justify='center' >
                        <Typography.Text style={{ fontFamily: 'Sukhumvit Set', color: '#fff', fontSize: 18 }}> All rights reserved. Copyright © 2021 Sprout Co., Ltd.</Typography.Text>
                    </Row>
                </Col>
            </Row>
        </Layout >
    )
}

export default LayoutComponent