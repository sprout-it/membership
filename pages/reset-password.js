
import { Form, Input, Row, Button, Card, Divider, Typography, Col } from 'antd'
import Link from 'next/link'
const ResetPassword = () => {
    const form = Form.useForm()

    return (
        <Row justify='center'>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <img src="/images/key-logo.svg" alt="key-logo" width={500} height={500} />
                </Row>
            </Col>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <Col span={24} md={24} sm={0} xs={0} >
                        <Typography.Title level={3}>Reset PASSWORD</Typography.Title>
                        <Typography.Paragraph >We can help you reset your password.
First, enter your number below.</Typography.Paragraph>
                        <Form ref={form}>
                            <Input placeholder="Enter your mobile number" style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                            <Form.Item>
                                <Button
                                    style={{
                                        borderRadius: 50,
                                        background: '#1BB61D',
                                        color: '#fff',
                                        width: '100%'
                                    }}>
                                    Send
                        </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ResetPassword