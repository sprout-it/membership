import { Card, Col, Row, Typography, Divider } from 'antd'

const ArticleAndRegisterAE = () => {

    return <Row style={{ padding: 25 }} justify='center' gutter={[20, 20]} align='middle'>

        <Col span={20}>
            <Row justify='center'>

                <Col span={24}>
                    <Row justify='center'>
                        <Typography.Title>บทความ</Typography.Title>
                    </Row>
                </Col>

                <Row gutter={[25, 25]} justify='center' align='middle'>
                    <Col xs={12} xm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Typography.Title level={3}>
                            <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                            Sprout Online
                        </Typography.Title>
                        <Card
                            cover={
                                <iframe
                                    height={250}
                                    width={500}
                                    src="https://www.youtube.com/embed/EK9WFpQDPZ8"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            }
                        >
                            <a className="news-text" href='https://www.youtube.com/embed/EK9WFpQDPZ8' target="_blank">
                                <Typography.Paragraph ellipsis={{
                                    rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                }}>newsName</Typography.Paragraph>
                            </a>
                        </Card>
                    </Col>

                    <Col xs={12} xm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Typography.Title level={3}>
                            <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                            Sprout Online
                        </Typography.Title>
                        <Card
                            cover={
                                <iframe
                                    height={250}
                                    width={500}
                                    src="https://www.youtube.com/embed/EK9WFpQDPZ8"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            }
                        >
                            <a className="news-text" href='https://www.youtube.com/embed/EK9WFpQDPZ8' target="_blank">
                                <Typography.Paragraph ellipsis={{
                                    rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                }}>newsName</Typography.Paragraph>
                            </a>
                        </Card>
                    </Col>
                </Row>

            </Row>
        </Col>

        <Col span={4}>
            <Row align='middle' style={{ height: '100%' }} justify='center'>
                <img src="images/index-ae/register.svg" width={200} height={300} alt="ae register" />
            </Row>
        </Col>

    </Row>
}

export default ArticleAndRegisterAE