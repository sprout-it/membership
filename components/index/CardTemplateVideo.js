import React from 'react'
import { Divider, Col, Typography, Card,  } from 'antd'

const CardTemplateVideo = ({ title, videoUrl, description }) => {
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
                <video width="100%" height="250" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            }>
            <Col span={24}>
                <Typography.Paragraph
                    ellipsis={{
                        rows: 2, suffix: <p style={{ color: '#0082e6' }}>อ่านเพิ่มเติม...</p>
                    }}
                    className='news-text'
                >
                    {description}
                </Typography.Paragraph>
            </Col>
        </Card>
    </Col>

}

export default CardTemplateVideo
