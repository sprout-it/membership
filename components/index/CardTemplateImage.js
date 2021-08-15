import React from 'react'
import { Card, Typography, Col, Divider } from 'antd'

const CardTemplateImage = ({ title, bodyUrl, timeStamp, description }) => {
    return <Col xs={24} xm={24} md={24} lg={8} xl={8} xxl={8}>
        <Typography.Title level={3}>
            <Divider type='vertical' style={{ height: 30, width: 3, background: '#35b729' }} />
            {title}
        </Typography.Title>

        <Card
            style={{
                minHeight: 400
            }}
            cover={
                <img
                    src="/images/index-mission/2.jpg"
                    src={bodyUrl}
                    alt="img"
                    style={{ minHeight: 250, minWidth: '100%' }}
                />
            }>
            <Col span={24}>
                <Typography.Text style={{ color: '#7a7a7a' }}>
                    {timeStamp}
                </Typography.Text>
                <Typography.Paragraph ellipsis={{
                    rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                }} className='news-text'>
                    {description}
                </Typography.Paragraph>
            </Col>
        </Card>

    </Col>
}

export default CardTemplateImage
