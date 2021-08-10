import { Row, Col, Divider, Card, Typography, Space } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardHorizontal from './CardHorizontal';

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

const NewsIndex = () => {

    const [news, setNews] = useState({ economic: [{ fileUrl: '', imgUrl: '' }] })
    const [analysis, setAnalysis] = useState({ global: [{ fileUrl: '', imgUrl: '' }] })
    const [live, setLive] = useState(null)
    const [newsState, setNewsState] = useState(news.economic)
    const [analysisState, setAnalysisState] = useState(analysis.global)

    const getNews = () => {
        axios.get(`${ENDPOINT}/news`)
            .then((response) => {
                if (response.data.code === 200) {
                    setNews(response.data.data)
                    setNewsState(response.data.data.economic)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getAnalysis = () => {
        axios.get(`${ENDPOINT}/analysis`)
            .then((response) => {
                if (response.data.code === 200) {
                    setAnalysis(response.data.data)
                    setAnalysisState(response.data.data.gold)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getLive = async () => {
        axios.get(`${ENDPOINT}/live`)
            .then((response) => {
                if (response.data.code === 200) {
                    setLive(response.data.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getNews()
        getAnalysis()
        getLive()
    }, [])

    if (newsState && analysisState && live) return <Row justify="center"
        gutter={[0, 20]}
        align='top'
        wrap={true}
        style={{
            width: '100vw',
            background: 'url("/background/BG-3.svg")',
            backgroundRepeat: 'no-repeat',
            paddingTop: 70,
            marginBottom: 50
        }}>

        <Col span={20}>
            <Space>
                <Row justify='center' gutter={[20, 20]} align='top'>

                    <Col xs={24} xm={24} md={8} lg={8} xl={8} xxl={8}>

                        <Typography.Title level={3}>
                            <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                            ข่าว
                        </Typography.Title>

                        <Space split={<Divider type='vertical' style={{ color: '#468DEC' }} />}  >
                            <a onClick={() => setNewsState(news.economic)}><Typography.Text style={{ color: '#468DEC' }}>
                                ด่วน
                            </Typography.Text></a>
                            <a onClick={() => setNewsState(news.gold)}><Typography.Text style={{ color: '#468DEC' }}>
                                หุ้น
                            </Typography.Text></a>
                            <a onClick={() => setNewsState(news.share)}><Typography.Text style={{ color: '#468DEC' }}>
                                ข่าวเก่า
                            </Typography.Text></a>
                        </Space>

                        <a
                            href={newsState[0].fileUrl}
                            target="_blank"
                        >
                            <Card
                                style={{
                                    minHeight: 400
                                }}
                                cover={
                                    <img
                                        src={newsState[0].imgUrl}
                                        alt="img"
                                        style={{ minHeight: 250, minWidth: '100%' }}
                                    />
                                }>
                                <Col span={24}>
                                    <Typography.Text style={{ color: '#7a7a7a' }}>
                                        {/* {newsState[0].timeStamp} */}
                                        12 มิถุนายน 2562
                                    </Typography.Text>
                                    <Typography.Paragraph
                                        ellipsis={{
                                            rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                        }}
                                        className='news-text'
                                    >
                                        {newsState[0].newsName}
                                    </Typography.Paragraph>
                                </Col>
                            </Card>
                        </a>

                    </Col>

                    <Col xs={24} xm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Typography.Title level={3}>
                            <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                            บทความ
                        </Typography.Title>

                        <Space split={<Divider type='vertical' style={{ color: '#468DEC' }} />}>
                            <a onClick={() => setAnalysisState(analysis.gold)}><Typography.Text style={{ color: '#468DEC' }}>
                                ข่าววันนี้
                            </Typography.Text></a>
                            <a onClick={() => setAnalysisState(analysis.set50)}><Typography.Text style={{ color: '#468DEC' }}>
                                ข่าวเด่น
                            </Typography.Text></a>
                            <a onClick={() => setAnalysisState(analysis.global)}><Typography.Text style={{ color: '#468DEC' }}>
                                Sprout
                            </Typography.Text></a>
                        </Space>

                        <a
                            href={analysisState[0].fileUrl}
                            target="_blank"
                        >
                            <Card
                                style={{
                                    minHeight: 400
                                }}
                                cover={
                                    <img
                                        src={newsState[0].imgUrl}
                                        alt="img"
                                        style={{ minHeight: 250, minWidth: '100%' }}
                                    />
                                }>
                                <Col span={24}>
                                    <Typography.Text style={{ color: '#7a7a7a' }}>
                                        {/* {newsState[0].timeStamp} */}
                                        12 มิถุนายน 2562
                                    </Typography.Text>
                                    <Typography.Paragraph ellipsis={{
                                        rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                    }} className='news-text'>
                                        {analysisState[0].newsName}
                                    </Typography.Paragraph>
                                </Col>
                            </Card>
                        </a>

                    </Col>

                    <Col xs={24} xm={24} md={8} lg={8} xl={8} xxl={8}>
                        <Typography.Title level={3}>
                            <Divider type='vertical' style={{ height: 30, width: 3, background: 'red' }} />
                            วีดีโอ
                        </Typography.Title>

                        <Space split={<Divider type='vertical' style={{ color: '#468DEC' }} />}>
                            <a onClick={() => setAnalysisState(analysis.gold)}><Typography.Text style={{ color: '#468DEC' }}>
                                เรื่องเด่น
                            </Typography.Text></a>
                            <a onClick={() => setAnalysisState(analysis.set50)}><Typography.Text style={{ color: '#468DEC' }}>
                                เกร็ดความรู้
                            </Typography.Text></a>
                            <a onClick={() => setAnalysisState(analysis.global)}><Typography.Text style={{ color: '#468DEC' }}>
                                สื่อออนไลน์
                            </Typography.Text></a>
                        </Space>

                        <a
                            href={analysisState[0].fileUrl}
                            target="_blank"
                        >
                            <Card
                                style={{
                                    minHeight: 400
                                }}
                                cover={
                                    <img
                                        src={newsState[0].imgUrl}
                                        alt="img"
                                        style={{ minHeight: 250, minWidth: '100%' }}
                                    />
                                }>
                                <Col span={24}>
                                    <Typography.Text style={{ color: '#7a7a7a' }}>
                                        {/* {newsState[0].timeStamp} */}
                                        12 มิถุนายน 2562
                                    </Typography.Text>
                                    <Typography.Paragraph ellipsis={{
                                        rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                                    }} className='news-text'>
                                        {analysisState[0].newsName}
                                    </Typography.Paragraph>
                                </Col>
                            </Card>
                        </a>

                    </Col>

                </Row>
            </Space>
        </Col>
    </Row>
    else return <></>
}

export default NewsIndex