import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row } from 'antd'

const IndexSlide = () => {
    return <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        transitionTime={1500}
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        stopOnHover
        emulateTouch
        showStatus={false}
    >
        {/* {
                    slideShows.map((item, index) => {
                        return <img key={index} src={item.imgUrl} />
                    })
                } */}
        <img src='/images/index-slide/slide1.svg' alt='1' />
        <img src='/images/index-slide/slide2.svg' alt='2' />
        <img src='/images/index-slide/slide3.svg' alt='3' />
    </Carousel>
};

export default IndexSlide;
