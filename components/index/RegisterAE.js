import React from 'react'
import { Col, Row, Typography } from "antd";
import Image from 'next/image'
const RegisterAE = () => {
    return (
        <Row align="middle" justify="center" gutter={[20, 25]} wrap={true}>
            <Col span={20}>
                <Row align="middle" justify="center" wrap={true}>

                    <Col span={24}>
                        <Row align="middle" justify="center" style={{ height: '100%' }}>
                            <Typography.Title
                                level={1}
                                style={{ fontFamily: 'Prompt' }}
                            >
                                เป็นพาร์ทเนอร์กับเรา
                            </Typography.Title>
                        </Row>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Row align="middle" justify="center" style={{ height: '100%' }}>
                            <Typography.Text
                                style={{
                                    fontSize: '1.5em',
                                    textAlign: 'center',
                                }}
                            >
                                ร่วมธุรกิจและเติบโตไปกับเรา
                                เพียงท่านเข้าร่วมกับเราสามารถได้ส่วนแบ่งจากการช่วยเราขายสินค้าโดยไม่ต้องลงทุนค่าใช้จ่ายใด ๆ
                                ทางเรามีสมาชิกที่พร้อมมอบประสบการแบบครอบครัวคอยช่วยเหลือท่าน
                            </Typography.Text>
                        </Row>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Row align="middle" justify="center" style={{ height: '100%' }}>
                            <a id="register-logo" href="https://forms.gle/RJF47DhmQav8VhXg8" target='_blank' style={{ height: '100%', width: '100%' }}>
                                <Image
                                    src="/images/index-ae/register.svg"
                                    width={300}
                                    height={300}
                                    alt="ae register"
                                />
                            </a>
                        </Row>
                    </Col>

                </Row>
            </Col>

        </Row>
    )
}

export default RegisterAE
