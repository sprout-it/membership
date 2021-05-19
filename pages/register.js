
import { Form, Input, Row, Button, Card, Divider, Typography } from 'antd'
import Link from 'next/link'

const Register = () => {
    const form = Form.useForm()
    return <Row justify='center' align='stretch'>
        <Card style={{ borderRadius: 5, padding: 5 }}>
            <Typography.Title level={3}>Sign up</Typography.Title>
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
                <Form.Item
                    label=' '
                    labelCol={{ span: 24 }}
                >
                    <Button style={{
                        borderRadius: 50,
                        width: '100%',
                        background: '#1BB61D',
                        color: '#fff'
                    }}>
                        Register
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    </Row >
}

export default Register