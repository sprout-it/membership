import React, { useState } from 'react'
import Link from "next/link";
import { Col, Row } from 'antd'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <Row justify='center'>
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

                        <a className='hamburger' onClick={toggleNavbar}>{collapsed ? <GiHamburgerMenu /> : <GrClose />}</a>
                        <Link href="/"><a onClick={toggleNavbar}>Home</a></Link>
                        <Link href="/marketing"><a onClick={toggleNavbar}>Marketing</a></Link>
                        <Link href="/it"><a onClick={toggleNavbar} >IT</a></Link>
                        <Link href="/logistic"><a onClick={toggleNavbar}>Logistic</a></Link>
                        <Link href="/financial"><a onClick={toggleNavbar}>Financial</a></Link>

                    </div>

                </div>
            </header>

        </Col>
    </Row>
}

export default Header