import SlideShow from "components/index/IndexSlide";
import Our from "components/index/Our";
import News from "components/index/News";
import ArticleAndRegisterAE from "components/index/ArticleAndRegisterAE";
import Covid from "components/index/Covid";
import Videos from "components/index/Videos";
import { Row, Col } from "antd";

const Index = () => {
  return (
      <Col span={24} style={{height:'100%'}}>
        <SlideShow />
        <Our/>
        {/* <ArticleAndRegisterAE /> */}
        {/* <News /> */}
      </Col>
  );
};

export default Index;
