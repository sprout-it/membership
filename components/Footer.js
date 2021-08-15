import { Row, Col, Layout } from "antd"

const Footer = () => {
    return <Layout.Footer justify='center' align='middle' style={{ width: '100%', backgroundColor: "#35b729", height: '100%' }}>
        <Row justify="center" style={{ color: "#fff", height: "100%" }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                {/* <Typography.Text style={{ fontFamily: 'Sukhumvit Set', color: '#fff', fontSize: 18 }}> All rights reserved. Copyright © 2021 Sprout Co., Ltd.</Typography.Text> */}
                {/* <FooterComponent /> */}
                <Row>Contact Information</Row>
                <Row><img src="/images/footer/phone.svg" width={18} height={18} alt="phone" /><pre style={{ fontSize: 16 }}> 09 5517 9516</pre></Row>
                <Row><img src="/images/footer/line.svg" width={18} height={18} alt="line" /><pre style={{ fontSize: 16 }}> @sproutcounter24</pre></Row>
                <Row><img src="/images/footer/email.svg" width={18} height={18} alt="email" /><pre style={{ fontSize: 16 }}> admin@sproutstory.co</pre></Row>
                <Row><img src="/images/footer/facebook.svg" width={18} height={18} alt="facebook" /><pre style={{ fontSize: 16 }}> https://www.facebook.com/sproutfoodT77/</pre></Row>
            </Col>
        </Row>
    </Layout.Footer>
}
export default Footer