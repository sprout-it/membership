
import { Form, Input, Row, Button, Card, Divider, Typography, Col } from 'antd'
import Link from 'next/link'
const Verification = () => {
    return (
        <Row justify='center'>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <img src="/images/verification-logo.svg" alt="verification-logo" width={500} height={500} />
                </Row>
            </Col>
            <Col span={12} md={12} sm={0} xs={0} >
                <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <Typography.Title>ENTER VERIFICATION CODE</Typography.Title>
                    <Typography.Paragraph>Enter OTPE</Typography.Paragraph>
                    <Typography.Paragraph>We have sent OTP on your number</Typography.Paragraph>
                    
                </Row>
            </Col>
        </Row>
    )
}

export default Verification