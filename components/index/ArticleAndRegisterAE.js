import { Card, Col, Row, Typography, Divider } from 'antd'

const ArticleAndRegisterAE = () => {

    return <Card style={{ width: '100vw' }}>
        <Row style={{ padding: 25 }} justify='center' gutter={[20, 20]} align='middle' wrap={true}>

            <Col xs={24} xm={24} md={20} lg={20} xl={20} xxl={20}>

                <Row justify='center'>

                    <Col span={24}>
                        <Row justify='center'>
                            <Typography.Title>บทความ</Typography.Title>
                        </Row>
                    </Col>

                    <Row gutter={[25, 25]} justify='center' align='middle'>
                        <Col xs={24} xm={24} md={12} lg={12} xl={12} xxl={12}>
                            <Typography.Title level={3}>
                                <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                                Sprout Online
                            </Typography.Title>
                            <Card
                                cover={
                                    <img src='/images/index-mission/2.jpg' alt='mission1' />
                                }
                            >
                                <a className="news-text" href='' target="_blank">
                                    <Typography.Paragraph ellipsis={{
                                        rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                    }}>ตลาด Sprout</Typography.Paragraph>
                                </a>
                            </Card>
                        </Col>

                        <Col xs={24} xm={24} md={12} lg={12} xl={12} xxl={12}>
                            <Typography.Title level={3}>
                                <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                                Sprout Online
                            </Typography.Title>
                            <Card
                                cover={
                                    <img src='/images/index-mission/1.jpg' alt='mission1' />
                                }
                            >
                                <a className="news-text" href='' target="_blank">
                                    <Typography.Paragraph ellipsis={{
                                        rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                    }}>ตลาด Sprout</Typography.Paragraph>
                                </a>
                            </Card>
                        </Col>
                    </Row>

                </Row>
            </Col>

            <Col xs={24} xm={24} md={4} lg={4} xl={4} xxl={4}>
                <Row align='middle' style={{ height: '100%' }} justify='center'>
                    <img src="images/index-ae/register.svg" width={200} height={300} alt="ae register" />
                </Row>
            </Col>

        </Row>
    </Card>
}

export default ArticleAndRegisterAE