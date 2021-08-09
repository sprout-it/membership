
import { Col, Row, Typography, Card } from 'antd'

const Our = () => {
    return <Row justify='center' align='middle' className='our-layout'>
        <Col span={24} style={{ padding: 25 }}>

                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <Row justify='center'>
                            <img src='/images/index-mission/3.jpg' />
                        </Row>
                    </Col>

                    <Col span={12} >
                        <Row align='middle' style={{ padding: '40px 20px' }}>
                            <Col span={24}>
                                <Typography.Title>
                                    เราคือใคร
                                </Typography.Title>
                            </Col>
                            <Col span={24}>
                                <Typography.Title>
                                    Our Vision & Mission
                                </Typography.Title>
                            </Col>
                            <Col span={24}>
                                <Typography.Text>
                                    เราต้องการนำแนวคิดที่ดีที่สุดจากความคิดเดิม และปรับใช้ใหม่ให้เหมาะกับวิถีชีวิตสมัยใหม่
                                </Typography.Text>
                            </Col>
                            <Col span={24}>
                                <Typography.Text>
                                    เราต้องการทำสิ่งนี้ในแบบที่จำกัดความเสียหายสำหรับอนาคตต่อโลกของเรา
                                </Typography.Text>
                            </Col>
                            <Col span={24}>
                                <Typography.Text>
                                    ปรับปรุงสภาพแวดล้อมความเป็นอยู่ และให้ผลตอบแทนที่เป็นธรรมสำหรับงานประจำวันที่ยุติธรรม
                                </Typography.Text>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Col span={12}>
                            <Row justify='center'>
                                <img src='/images/index-mission/1.jpg' />
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row justify='center'>
                                <img src='/images/index-mission/2.jpg' />
                            </Row>
                        </Col>
                    </Col>
                </Row>

        </Col>
    </Row>
}
export default Our