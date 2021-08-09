import { Col, Row, Typography } from "antd"

const CardHorizontal = ({ cover, content, isYoutube, timeStamp }) => {
    return <Row align='middle' gutter={[10, 10]} style={{ background: 'white', marginTop: 25 }}>
        <Col span={10}>
            {
                isYoutube
                    ?
                    <iframe
                        style={{ height: 120, width: '100%' }}
                        src={cover}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    :
                    <img
                        src={cover}
                        style={{ height: 120, width: '100%' }}
                        alt='cover news'
                    />
            }
        </Col>
        <Col span={14}>
            <Row style={{ height: 120 }} justify='start' align='middle'>
                <Col span={24}>
                    <Typography.Paragraph style={{ fontSize: 12, fontFamily: 'Poppins', color: '#7a7a7a' }}>
                        {timeStamp}
                    </Typography.Paragraph>
                </Col>
                <Col span={24}>
                    <Typography.Paragraph
                        ellipsis={{
                            rows: 2,
                            suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                        }} style={{ fontSize: 16, fontFamily: 'Poppins' }}>
                        {content}
                    </Typography.Paragraph>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default CardHorizontal