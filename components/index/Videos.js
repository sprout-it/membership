import { Row, Col, Space } from 'antd';
import CardTemplateVideo from './CardTemplateVideo';

const Videos = () => {

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

                    <CardTemplateVideo
                        title="ข่าว"
                        tag={["ด่วน", "หุ้น", "ข่าวเก่า"]}
                        description="news name"
                        videoUrl="https://storage.googleapis.com/sprout-membership.appspot.com/video1.mp4"
                    />

                    <CardTemplateVideo
                        title="ข่าว"
                        tag={["ด่วน", "หุ้น", "ข่าวเก่า"]}
                        description="news name"
                        videoUrl="https://storage.googleapis.com/sprout-membership.appspot.com/video2.mp4"
                    />

                    <CardTemplateVideo
                        title="ข่าว"
                        tag={["ด่วน", "หุ้น", "ข่าวเก่า"]}
                        description="news name"
                        videoUrl="https://storage.googleapis.com/sprout-membership.appspot.com/video3.mp4"
                    />

                </Row>
            </Space>
        </Col>
    </Row>
}

export default Videos