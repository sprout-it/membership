import { Tabs, Row, Col } from 'antd'
import { Button } from 'antd/lib/radio'
import DetailCard from 'components/membership/DetailCard'

const Detail = () => {
    return (
        <Row
            justify='center'
            align='middle'
            style={{
                padding: 50
            }}
        >
            <Col span={24} style={{ borderRadius: 10 }}>
                <Row justify='start' gutter={[20, 20]} wrap={true}>
                    {
                        ['free', 'business', 'premium', 'scaleup', 'dedicated'].map(item =>
                            <Col span={7}>
                                <DetailCard price={item} />
                            </Col>
                        )
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default Detail