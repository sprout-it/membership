import { Col, Divider, Row, Space, Card } from 'antd'

const Covid = () => {
    return <Row>
        <Col span={24}>
            <Row justify='start'>
                สถิติผู้ติดเชื้อโควิด-19 ในประเทศไทย
            </Row>
        </Col>
        <Col span={24}>
            <Space split={<Divider type='vertical' />}>
                <Card>ยอดผู้ติดเชื้อเพิ่มขึ้น</Card>
                <Card>ยอดผู้ติดเชื้อที่หายแล้ว</Card>
                <Card>กำลังรักษาตัว</Card>
                <Card>เสียชีวิต</Card>
            </Space>
        </Col>
    </Row>
}

export default Covid