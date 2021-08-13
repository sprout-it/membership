import SlideShow from 'components/index/IndexSlide'
import Our from 'components/index/Our'
import News from 'components/index/News'
import ArticleAndRegisterAE from 'components/index/ArticleAndRegisterAE'
import Covid from 'components/index/Covid'
import Videos from 'components/index/Videos'
import { Row } from 'antd'

const Index = () => {
  return <Row gutter={[0]}>
    <SlideShow />
    <Our />
    <ArticleAndRegisterAE />
    <News />
  </Row>
}

export default Index