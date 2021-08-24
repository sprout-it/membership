import { Row, Col, Layout, Typography } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      justify="center"
      align="middle"
      style={{
        width: "100%",
        backgroundColor: "#35b729",
        height: "100%",
        fontFamily: "'Prompt', sans-serif",
      }}
    >
      <Row
        justify="center"
        align="middle"
        gutter={[0, 0]}
        wrap={true}
        style={{ color: "#fff", height: "100%", alignItems: "center" }}
      >
        <Col xs={{ span: 22, offset: 2 }} sm={{ span: 22, offset: 2 }} md={{ span: 22, offset: 2 }} lg={{ span: 22, offset: 2 }} xl={{ span: 22, offset: 2 }} xxl={{ span: 22, offset: 2 }} style={{ width: '100%' }}>
          <Row justify="start" align="middle" style={{ padding: 5, fontWeight: 'bold', fontSize: 20 }}>
            Contact Information
          </Row>
          <Row justify="start" align="middle" style={{ padding: 5 }}>
            <img
              src="/images/footer/phone.svg"
              width={18}
              height={18}
              alt="phone"
            />
            <Typography.Text
              style={{ fontSize: 16, color: "#fff", marginLeft: 5 }}
            >
              {" "}
              09 5517 9516
            </Typography.Text>
          </Row>
          <Row justify="start" align="middle" style={{ padding: 5 }}>
            <img
              src="/images/footer/line.svg"
              width={18}
              height={18}
              alt="line"
            />
            <Typography.Text
              style={{ fontSize: 16, color: "#fff", marginLeft: 5 }}
            >
              @sproutcounter24
            </Typography.Text>
          </Row>
          <Row justify="start" align="middle" style={{ padding: 5 }}>
            <img
              src="/images/footer/email.svg"
              width={18}
              height={18}
              alt="email"
            />
            <Typography.Text
              style={{ fontSize: 16, color: "#fff", marginLeft: 5 }}
            >
              {" "}
              admin@sproutstory.co
            </Typography.Text>
          </Row>
          <Row justify="start" align="middle" style={{ padding: 5 }}>
            <img
              src="/images/footer/facebook.svg"
              width={18}
              height={18}
              alt="facebook"
            />
            <Typography.Text
              style={{ fontSize: 16, color: "#fff", marginLeft: 5 }}
            >
              https://www.facebook.com/sproutfoodT77/
            </Typography.Text>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
};
export default Footer;
