import React, { useState, useEffect } from "react";
import { Tabs, Card, Row, Col, Typography } from "antd";
import axios from "axios";

const Marketing = () => {
  return (
    <Row justify="center">
      <Col span={22}>
        <Row
          justify="start"
          gutter={[20, 40]}
          style={{ marginTop: "60px", marginBottom: "40px" }}
        >
          <Col span={7}>
            <Card
              size="small"
              title="Free"
              extra={<a href="#">More</a>}
            >
              <p>ปรึกษาเรื่องการตลาด</p>
              <p>Sprout Facebook 1 ครั้ง</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="3000"
            >
              <p>ปรึกษาเรื่องการตลาด</p>
              <p>Sprout Facebook 2 ครั้ง</p>
              <p>เปิด Line Official Account</p>
              <p>Review on Facebook Close Group 1 ครั้ง</p>
              <p>โฆษณา Facebook Boost รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 1 ครั้ง</p>
              <p>Facebook Content 1 Content</p>
              <p>Review on Social Media 1 Content</p>
              <p>ออกแบบรูป Graphic Design 1 รูป</p>
              <p>Sales Promotion Ideas คิดโปรโมชั่นให้ลูกค้า 1 ครั้ง</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="6000"
            >
              <p>ปรึกษาเรื่องการตลาด</p>
              <p>Sprout Facebook 3 ครั้ง</p>
              <p>เปิด Line Official Account</p>
              <p>Review on Facebook Close Group 2 ครั้ง</p>
              <p>โฆษณา Facebook Boost รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 1 ครั้ง</p>
              <p>โฆษณา Instagram Ads รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 1 ครั้ง</p>
              <p>Facebook Content 1 Content</p>
              <p>Review on Social Media 1 Content</p>
              <p>Instagram Content 1 Content</p>
              <p>ออกแบบ Logo แบรนด์</p>
              <p>ออกแบบรูป Graphic Design 2 รูป</p>
              <p>Sales Promotion Ideas คิดโปรโมชั่นให้ลูกค้า 2 ครั้ง</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="9000"
            >
              <p>ปรึกษาเรื่องการตลาด</p>
              <p>Sprout Facebook 4 ครั้ง</p>
              <p>เปิด Line Official Account</p>
              <p>LineOA Rich menu 4 ช่อง</p>
              <p>Review on Facebook Close Group 3 ครั้ง</p>
              <p>โฆษณา Facebook Boost รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 2 ครั้ง</p>
              <p>โฆษณา Instagram Ads รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 1 ครั้ง</p>
              <p>โฆษณา TikTok รวม Content (ยิงแอด) 1 ครั้ง</p>
              <p>Facebook Content 2 Content</p>
              <p>Review on Social Media 1 Content</p>
              <p>Instagram Content 1 Content</p>
              <p>LINE OA Content 1 Content</p>
              <p>ออกแบบ Logo แบรนด์</p>
              <p>ออกแบบรูป Graphic Design 2 รูป</p>
              <p>Sales Promotion Ideas คิดโปรโมชั่นให้ลูกค้า 2 ครั้ง</p>
              <p>Vision and Mission</p>
              <p>SWOT Analysis</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="12000"
            >
              <p>ปรึกษาเรื่องการตลาด</p>
              <p>Sprout Facebook 5 ครั้ง</p>
              <p>เปิด Line Official Account</p>
              <p>LineOA Rich menu 4 ช่อง</p>
              <p>Review on Facebook Close Group 4 ครั้ง</p>
              <p>โฆษณา Facebook Boost รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 2 ครั้ง</p>
              <p>โฆษณา Instagram Ads รวม Content (รูปปก Content + แคปชั่น + ยิงแอด) 2 ครั้ง</p>
              <p>โฆษณา TikTok รวม Content (ยิงแอด) 2 ครั้ง</p>
              <p>Facebook Content 3 Content</p>
              <p>Review on Social Media 1 Content</p>
              <p>Instagram Content 1 Content</p>
              <p>LINE OA Content 1 Content</p>
              <p>ออกแบบ Logo แบรนด์</p>
              <p>ออกแบบรูป Graphic Design 3 รูป</p>
              <p>Sales Promotion Ideas คิดโปรโมชั่นให้ลูกค้า 3 ครั้ง</p>
              <p>Vision and Mission</p>
              <p>SWOT Analysis</p>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Marketing;
