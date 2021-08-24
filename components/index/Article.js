import { Col, Row, Typography } from "antd";
import CardTemplateImage from 'components/index/CardTemplateImage'

const ArticleAndRegisterAE = () => {
  return (
    <Row
      justify="center"
      gutter={[20, 20]}
      align="middle"
      wrap={true}
      style={{ width: '100%' }}
    >
      <Col span={20}>

        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Row justify="center">
            <Typography.Title style={{ fontFamily: "'Prompt', sans-serif", }}>บทความ</Typography.Title>
          </Row>

          <Row gutter={[25, 25]} justify="center" align="middle" style={{ fontFamily: "'Prompt', sans-serif", }}>
            <CardTemplateImage title="บทความ" bodyUrl="/images/index-mission/1.jpg" description="discription" timeStamp="12 มิถุนายน 2562" />
            <CardTemplateImage title="บทความ" bodyUrl="/images/index-mission/2.jpg" description="discription" timeStamp="12 มิถุนายน 2562" />
            <CardTemplateImage title="บทความ" bodyUrl="/images/index-mission/2.jpg" description="discription" timeStamp="12 มิถุนายน 2562" />
          </Row>

        </Col>

      </Col>
    </Row>
  );
};

export default ArticleAndRegisterAE;
