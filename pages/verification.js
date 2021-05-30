import { Form, Input, Row, Button, Card, Divider, Typography, Col } from 'antd'
import Link from 'next/link'
import OtpInput from 'react-otp-input';
import React, { useState, useEffect } from 'react'

const Verification = () => {
    const [otp,setOtp]=useState('');
    const handleChange = (otp) => setOtp(otp);
    return (
        <Row justify='center'>
            <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={12} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <img src="/images/verification-logo.svg" alt="verification-logo" width={500} height={500} />
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <Card style={{ padding: 10, minHeight: '100vh' }}>
                    <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                        <Col xs={24} sm={22} md={18} lg={16} xl={16} xxl={12} >
                            <Row justify='center'>
                                <Typography.Title>ENTER VERIFICATION CODE</Typography.Title>
                            </Row>
                            <Row justify='center'>
                                <Typography.Paragraph>Enter OTP</Typography.Paragraph>
                            </Row>
                            <Row justify='center'>
                                <Typography.Paragraph>We have sent OTP on your number</Typography.Paragraph>
                            </Row>
                            <Form>
                                <Row justify='center' >
                                    <OtpInput
                                    inputStyle='inputStyle'
                                        value={otp}
                                        onChange={handleChange}
                                        numInputs={6}
                                        separator={<span>-</span>}
                                    />
                                </Row>
                                <Row justify='center'>
                                    <Typography.Paragraph>You will get OTP in 29 sec</Typography.Paragraph>
                                </Row>
                                <Form.Item>
                                    <Button
                                        style={{
                                            borderRadius: 50,
                                            background: '#1BB61D',
                                            color: '#fff',
                                            width: '100%',
                                            height: '40px'
                                        }}>
                                        Send
                        </Button>
                                </Form.Item>
                            </Form>

                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Verification