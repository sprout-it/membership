
import { Form, Input, Row, Button, Card, Divider, Typography, Col } from 'antd'
import Link from 'next/link'
const SocialRegister = () => {
    const form = Form.useForm()
    return (
        <Row justify='center'>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <img src="/images/register-logo.svg" alt="key-logo" width={500} height={500} />
                </Row>
            </Col>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <Form ref={form}>
                        <Form.Item
                            label="Email"
                            name="email"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="Confirm password"
                            name="confirmPassword"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="First name"
                            name="firstName"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="Last name"
                            name="lastName"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                        <Form.Item
                            label="Referrer Code"
                            name="reffererCode"
                            labelCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)' }} width={250} />
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
        </Row>
    )
}

export default SocialRegister