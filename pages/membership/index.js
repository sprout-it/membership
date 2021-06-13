import React, { useState, useEffect } from 'react'
import { Tabs, Card, Row, Col, Typography } from 'antd'
import axios from 'axios'
import MembershipCard from 'components/membership/MembershipCard'

const Membership = () => {
    const { TabPane } = Tabs;
    const callback = (key) => {
        console.log(key);
    }
    const [membership, setMembership] = useState([])

    const getMembership = () => {
        axios.get('http://localhost/package')
            .then(async (response) => {
                console.log(response)
                if (response.data.code === 200) {
                    setMembership(response.data.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getMembership()
    }, [])

    return (
        <Row
            justify='center'
            align='middle'
            style={{
                padding: 50
            }}
        >
            <Col span={24} style={{ borderRadius: 10 }}>
                <Tabs onChange={callback} type="card" style={{ background: '#1BB61D', padding: 50 }}>
                    <TabPane tab="รายเดือน" key="1" >
                        <Row justify='start' gutter={[20, 20]} wrap={true}>
                            {
                                ['Free / 6 เดือน', '3000', '6000', '9000', '12000'].map(item =>
                                    <Col key={item} span={5}>
                                        <MembershipCard price={item} />
                                    </Col>
                                )
                            }
                        </Row>
                    </TabPane>
                    <TabPane tab="รายปี" key="2">
                        <Row justify='start' gutter={[5, 40]}>
                            <Col span={8}>
                                <Card size="small" title="Free" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content2.1</p>
                                    <p>Card content2.1</p>
                                    <p>Card content2.1</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="3000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content2.2</p>
                                    <p>Card content2.2</p>
                                    <p>Card content2.2</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="6000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content2.3</p>
                                    <p>Card content2.3</p>
                                    <p>Card content2.3</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="9000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content2.4</p>
                                    <p>Card content2.4</p>
                                    <p>Card content2.4</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="12000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content2.5</p>
                                    <p>Card content2.5</p>
                                    <p>Card content2.5</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="กำหนดแพ็คเกจเอง" key="3">
                        <Row justify='start' gutter={[5, 40]}>
                            <Col span={8}>
                                <Card size="small" title="Free" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content3.1</p>
                                    <p>Card content3.1</p>
                                    <p>Card content3.1</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="3000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content3.2</p>
                                    <p>Card content3.2</p>
                                    <p>Card content3.2</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="6000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content3.3</p>
                                    <p>Card content3.3</p>
                                    <p>Card content3.3</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="9000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content3.4</p>
                                    <p>Card content3.4</p>
                                    <p>Card content3.4</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card size="small" title="12000" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    <p>Card content3.5</p>
                                    <p>Card content3.5</p>
                                    <p>Card content3.5</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Col>
            <style jsx>{`
                
            `}</style>
        </Row>
    )
}

export default Membership