import React, { useState, useContext } from 'react'
import Link from "next/link";
import { Col, Row } from 'antd'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import GlobalState from 'utils/GlobalState'
const Header = () => {
    const { token, setToken } = useContext(GlobalState)

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <Row justify='center' style={{ fontFamily: "'Prompt', sans-serif", }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <header>

                <div className="navbar-list">
                    <div className="header-section-left">

                        <Link href="/">
                            <img
                                className="logo-img"
                                src="/icons/sprout.svg"
                                alt="sprout"
                            />
                        </Link>

                    </div>

                    <div className={collapsed ? `header-section-right` : `header-section-right active`} >

                        {collapsed
                            ?
                            <a className='hamburger' onClick={toggleNavbar}><GiHamburgerMenu /></a>
                            :
                            <a className='hamburger' onClick={toggleNavbar}><GrClose /></a>
                        }
                        <Link href="/"><a onClick={() => setCollapsed(false)}>Home</a></Link>
                        <Link href="/marketing"><a onClick={() => setCollapsed(false)}>Marketing</a></Link>
                        <Link href="/it"><a onClick={() => setCollapsed(false)} >Technology</a></Link>
                        <Link href="/logistic"><a onClick={() => setCollapsed(false)}>Logistic</a></Link>
                        <Link href="/financial"><a onClick={() => setCollapsed(false)}>Financial</a></Link>
                        <Link href="/financial"><a onClick={() => setCollapsed(false)}>Technology</a></Link>
                        <Link href="/financial"><a onClick={() => setCollapsed(false)}>Security</a></Link>
                        <Link href="/financial"><a onClick={() => setCollapsed(false)}>Legal</a></Link>
                        {token ? <>
                            <a onClick={() => {
                                setCollapsed(false)
                                localStorage.removeItem('token')
                                setToken("")
                            }}>Sign Out</a>
                        </> : <>
                            <Link href="/register"><a onClick={() => setCollapsed(false)}>Register</a></Link>
                            <Link href="/login"><a onClick={() => setCollapsed(false)}>Sign In</a></Link>
                        </>
                        }

                    </div>

                </div>
            </header>

        </Col>
    </Row>
}

export default Header