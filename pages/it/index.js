import React, { useState, useEffect } from "react";
import { Tabs, Card, Row, Col, Typography } from "antd";
import axios from "axios";

const It = () => {
  return (
    <Row justify='center'>
      <Col span={22}>
        <Row justify="start" gutter={[20, 40]} style={{ marginTop: "60px",marginBottom:'40px' }}>
          <Col span={7}>
            <Card
              size="small"
              title="Free"
              extra={<a href="#">More</a>}
              style={{ width: "100%",height:"500px" }}
            >
              <p>เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account</p>
              <p>ให้คำปรึกษาด้าน IT</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="3000"
              extra={<a href="#">More</a>}
              style={{ width: "100%",height:"500px"  }}
            >
             <p>เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account</p>
              <p>ให้คำปรึกษาด้าน IT</p>
              <p>โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO</p>
              <p>ติดตั้งระบบเสริมให้ใน Line OA 1 ระบบ</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="6000"
              extra={<a href="#">More</a>}
              style={{ width: "100%",height:"500px"  }}
            >
           <p>เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account</p>
              <p>ให้คำปรึกษาด้าน IT</p>
              <p>โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO</p>
              <p>ติดตั้งระบบเสริมให้ใน Line OA 1 ระบบ</p>
              <p>ออกแบบ Rich Menu พร้อมเชื่อมต่อเว็บไซต์ *เงื่อนไข 1 account สามารถแก้ไขได้ 1 ครั้ง</p>
              <p>สร้าง Facebook Page พร้อมใช้งาน และออกแบบรูปหน้าปก Facebook *เงื่อนไข สร้างให้1 Page</p>
              <p>เปิดร้านค้าใน Grab ให้ใช้งาน</p>
              <p>ปักหมุดร้านบนแผนที่ออนไลน์ ด้วย Google My Business</p>
              <p>เปิดร้านค้าใน Hungry hub ให้ใช้งาน</p>
              <p>สอนการใช้งานระบบเสริมผ่านทางออนไลน์ พร้อมคู่มือการใช้งาน</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="9000"
              extra={<a href="#">More</a>}
              style={{ width: "100%",height:"500px"  }}
            >
               <p>เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account</p>
              <p>ให้คำปรึกษาด้าน IT</p>
              <p>โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO</p>
              <p>ติดตั้งระบบเสริมให้ใน Line OA 1 ระบบ</p>
              <p>ออกแบบ Rich Menu พร้อมเชื่อมต่อเว็บไซต์ *เงื่อนไข 1 account สามารถแก้ไขได้ 1 ครั้ง</p>
              <p>สร้าง Facebook Page พร้อมใช้งาน และออกแบบรูปหน้าปก Facebook *เงื่อนไข สร้างให้1 Page</p>
              <p>เปิดร้านค้าใน Grab ให้ใช้งาน</p>
              <p>ปักหมุดร้านบนแผนที่ออนไลน์ ด้วย Google My Business</p>
              <p>เปิดร้านค้าใน Hungry hub ให้ใช้งาน</p>
              <p>สอนการใช้งานระบบเสริมผ่านทางออนไลน์ พร้อมคู่มือการใช้งาน</p>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              size="small"
              title="12000"
              extra={<a href="#">More</a>}
              style={{ width: "100%" ,height:"500px" }}
            >
          <p>เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account</p>
              <p>ให้คำปรึกษาด้าน IT</p>
              <p>โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO</p>
              <p>ติดตั้งระบบเสริมให้ใน Line OA 1 ระบบ</p>
              <p>ออกแบบ Rich Menu พร้อมเชื่อมต่อเว็บไซต์ *เงื่อนไข 1 account สามารถแก้ไขได้ 1 ครั้ง</p>
              <p>สร้าง Facebook Page พร้อมใช้งาน และออกแบบรูปหน้าปก Facebook *เงื่อนไข สร้างให้1 Page</p>
              <p>เปิดร้านค้าใน Grab ให้ใช้งาน</p>
              <p>ปักหมุดร้านบนแผนที่ออนไลน์ ด้วย Google My Business</p>
              <p>เปิดร้านค้าใน Hungry hub ให้ใช้งาน</p>
              <p>สอนการใช้งานระบบเสริมผ่านทางออนไลน์ พร้อมคู่มือการใช้งาน</p>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default It;
