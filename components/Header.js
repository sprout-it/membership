import React, { useState } from 'react'
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import { Col, Row } from 'antd'

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <Row justify='center'>
        <Col xs={0} sm={0} md={24} lg={24} xl={24} xxl={24}>
            <header>
                <ul >
                    <li ><a href="/">Home</a></li>
                    <li ><a href="/marketing">Marketing</a></li>
                    <li ><a href="/it">IT</a></li>
                    <li ><a href="/logistic">Logistic</a></li>
                    <li ><a href="/financial">Financial</a></li>
                </ul>
            </header>

        </Col>

        <Col xs={24} sm={24} md={0} lg={0} xl={0} xxl={0}>
            <header>
                <Navbar color="faded" light>
                    <Link href="/" >
                        <NavbarBrand href="/" className="mr-auto">
                            <img
                                className="logo-img"
                                src="/icons/sprout.svg"
                                alt="sprout"
                                width="50%"
                                height="50%"
                            />
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link href="/">
                                    <NavLink>
                                        <a>Home</a>
                                    </NavLink>
                                </Link>
                                <Link href="/marketing">
                                    <NavLink>
                                        <a>Marketing</a>
                                    </NavLink>
                                </Link>
                                <Link href="/it">
                                    <NavLink>
                                        <a>IT</a>
                                    </NavLink>
                                </Link>
                                <Link href="/logistic">
                                    <NavLink>
                                        <a>Logistic</a>
                                    </NavLink>
                                </Link>
                                <Link href="/financial">
                                    <NavLink>
                                        <a>Fianancial</a>
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        </Col>
        <style jsx>{`
                ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        
        li {
            float: left;
        }
        
        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        
        li a:hover:not(.active) {
            background-color: #111;
        }
        
        .active {
            background-color: #04AA6D;
        }
    `}</style>
    </Row >
}

export default Header