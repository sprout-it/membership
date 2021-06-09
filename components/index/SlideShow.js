
import React, { useState } from 'react'
import { Col, Row, Typography, Space, Divider, Card } from 'antd'
import Slider from 'react-slick'

const SlideShow = () => {
    const [slideShows, setSlideShows] = useState([
        {
            imgUrl: '/images/test_Slide1.svg'
        },
        {
            imgUrl: '/images/test_Slide2.svg'
        }
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <Slider
        autoplay={true}
        autoplaySpeed={2000}
        arrows={false}
        {...settings}
        style={{ maxWidth: '100%', maxHeight: '100%', margin: '22px 0 0 0' }}
    >

        {
            slideShows.map(img => {
                return <Row key={img.imgUrl} justify='center' style={{ background: '#f7f7f7' }}>
                    <Col span={24}>
                        <img src={img.imgUrl} style={{ width: '100vw', height: "auto" }} alt='' />
                    </Col>
                </Row>
            })
        }

    </Slider>
}

export default SlideShow