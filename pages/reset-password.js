import { Form, Input, Row, Button, Card, Divider, Typography, Col } from 'antd'
import Link from 'next/link'

const ResetPassword = () => {
    const form = Form.useForm()

    return (
        <Row justify='center'>
            <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={12} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <img src="/images/key-logo.svg" alt="key-logo" width={500} height={500} />
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} >
                <Card style={{ padding: 10, minHeight: '100vh' }}>
                    <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                        <Col xs={24} sm={22} md={18} lg={16} xl={16} xxl={12} >
                            <Typography.Title level={3}>Reset PASSWORD</Typography.Title>
                            <Typography.Paragraph >We can help you reset your password.
First, enter your number below.</Typography.Paragraph>
                            <Form ref={form}>
                                <Input placeholder="Enter your mobile number" style={{ borderRadius: 50, background: 'rgb(240, 242, 245)',marginTop:30,marginBottom:30,height:'40px' }} width={250} />
                                <Form.Item>
                                    <Button
                                        style={{
                                            borderRadius: 50,
                                            background: '#1BB61D',
                                            color: '#fff',
                                            width: '100%',
                                            height:'40px'
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

export default ResetPassword