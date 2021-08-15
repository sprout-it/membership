import SlideShow from 'components/index/IndexSlide'
import Our from 'components/index/Our'
import News from 'components/index/News'
import Article from 'components/index/Article'
import RegisterAE from 'components/index/RegisterAE'
import Covid from 'components/index/Covid'
import Videos from 'components/index/Videos'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'antd'

const Index = () => {
  return <Row gutter={[0, 25]}>
    <SlideShow />
    <Our />
    <Article />
    <RegisterAE />
    <News />
    <Videos />
  </Row>
}

export default Index;
