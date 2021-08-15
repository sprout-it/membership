import React, { useState } from 'react'
import Link from "next/link";
import { Col, Row } from 'antd'

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <Row justify='center'>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <header>

                <ul>
                    <img
                        className="logo-img"
                        src="/icons/sprout.svg"
                        alt="sprout"
                    />
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/marketing"><a>Marketing</a></Link>
                    <Link href="/it"><a >IT</a></Link>
                    <Link href="/logistic"><a>Logistic</a></Link>
                    <Link href="/financial"><a>Financial</a></Link>
                </ul>
            </header>

        </Col>
        <style jsx>
            {`

            .logo-img{
                width: 200px;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                background: #23CF48;
            }

            a {
                text-decoration: none;
                text-align: center;
                width: 100%;
                padding: 15px;
                color: #fff;
                font-size: 1.5em;
            }

            a:hover {
                background: #21C473;
            }
            
            .active {
                background-color: #21C473;
            }

            @media screen and (min-width: 800px){
                ul {
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                }
                a {
                    text-decoration: none;
                    text-align: center;
                    height:100%;
                    width: auto;
                    color: #fff;
                }
                a:hover {
                    height:100%;
                    background: #21C473;
                }
            }
    `}
        </style>
    </Row>
}

export default Header