import { Col, Row, Typography, Card } from 'antd'

const Our = () => {
    return <Row>
        <Col span={24} style={{
            background: 'url("/images/index-background/sprout1.jpg") no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "100vw",
            height: 600,
        }}
        >
            <Row justify='center' align='middle' style={{
                height: '100%',
                background: '#444',
                opacity: '.8',
                padding: 30,
                height: '100%',
                width: '100%',
            }}>
                <Col span={24} >
                    <Row justify='center'>
                        <Col span={24} >
                            <Row justify='center'>
                                <Typography.Title
                                    style={{
                                        fontFamily: "'Prompt', sans-serif",
                                        color: '#fff',
                                        fontSize: 50,
                                        zIndex: 1
                                    }}>เราคือใคร Our Vision & Mission</Typography.Title>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={14}>
                            <Row justify='center'>
                                <Typography.Text
                                    className="main-font"
                                    style={{
                                        fontFamily: "'Prompt', sans-serif",
                                        color: 'white',
                                        fontSize: "1.5em",
                                        zIndex: 1,
                                        textOverflow: 'ellipsis',
                                        textAlign: 'center'
                                    }}>
                                    เราต้องการนำแนวคิดที่ดีที่สุดจากความคิดเดิม และปรับใช้ใหม่ให้เหมาะกับวิถีชีวิตสมัยใหม่
                                    เราต้องการทำสิ่งนี้ในแบบที่จำกัดความเสียหายสำหรับอนาคตต่อโลกของเรา
                                    ปรับปรุงสภาพแวดล้อมความเป็นอยู่ และให้ผลตอบแทนที่เป็นธรรมสำหรับงานประจำวันที่ยุติธรรม
                                </Typography.Text>
                            </Row>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Col>

    </Row>
}
export default Our