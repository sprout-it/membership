import { Col, Row, Typography, Card } from 'antd'

const Our = () => {
    return <Row>

        <Col span={24} style={{
            background: 'url("/images/index-background/sprout1.jpg") no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "100vw",
            height: 600
        }}>
            <Row justify='center' align='middle' style={{
                height: '100%',
                background: '#444',
                opacity: '.8',
                padding: 30,
                height: '100%',
                width: '100%',
            }}>
                <Col span={24} >
                    <Col span={24} >
                        <Row justify='center'>
                            <Typography.Title style={{ color: '#fff', fontSize: 50, zIndex: 1 }}>เราคือใคร Our Vision & Mission</Typography.Title>
                        </Row>
                    </Col>
                    <Col span={24} >
                        <Row justify='center'>
                            <Typography.Text style={{ color: 'white', fontSize: 24, zIndex: 1, textOverflow: 'ellipsis' }}>
                                เราต้องการนำแนวคิดที่ดีที่สุดจากความคิดเดิม และปรับใช้ใหม่ให้เหมาะกับวิถีชีวิตสมัยใหม่
                                เราต้องการทำสิ่งนี้ในแบบที่จำกัดความเสียหายสำหรับอนาคตต่อโลกของเรา
                                ปรับปรุงสภาพแวดล้อมความเป็นอยู่ และให้ผลตอบแทนที่เป็นธรรมสำหรับงานประจำวันที่ยุติธรรม
                            </Typography.Text>
                        </Row>
                    </Col>

                </Col>

            </Row>
        </Col>

        <Card style={{ width: '100vw' }}>
            <Col span={24}>
                <Row align='middle' justify='center' style={{ textAlign: 'center' }}>

                    <Col span={24}>
                        <Typography.Title>กิจกรรม</Typography.Title>
                    </Col>

                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <Row justify='center'>
                                    <img src='/images/index-mission/1.jpg' />
                                </Row>
                            </Col>
                            <Col span={8}>
                                <Row justify='center'>
                                    <img src='/images/index-mission/3.jpg' />
                                </Row>
                            </Col>
                            <Col span={8}>
                                <Row justify='center'>
                                    <img src='/images/index-mission/2.jpg' />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Card>

    </Row>
}
export default Our