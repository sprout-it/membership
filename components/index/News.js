import { Row, Col, Space } from 'antd';
import CardTemplateImage from './CardTemplateImage';

const NewsIndex = () => {

    return <Row justify="center"
        gutter={[0, 20]}
        align='top'
        wrap={true}
        style={{
            width: '100vw',
            backgroundRepeat: 'no-repeat',
        }}>

        <Col span={20}>
            <Space>
                <Row justify='center' gutter={[20, 20]} align='top'>

                    <CardTemplateImage
                        title="ข่าว"
                        description="news name"
                        bodyUrl="/images/index-mission/1.jpg"
                        timeStamp=""
                    />

                    <CardTemplateImage
                        title="ข่าว"
                        description="news name"
                        bodyUrl="/images/index-mission/2.jpg"
                        timeStamp=""
                    />

                    <CardTemplateImage
                        title="ข่าว"
                        description="news name"
                        bodyUrl="/images/index-mission/1.jpg"
                        timeStamp=""
                    />

                </Row>
            </Space>
        </Col>
    </Row>
}

export default NewsIndex