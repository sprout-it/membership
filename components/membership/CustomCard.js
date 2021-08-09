import { Card, Row, Col, Typography } from "antd";
import Image from "next/image";
const CustomCard = ({ topic }) => {
    const custom ={
        it:{
            title:'IT',
            data:["เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account","ให้คำปรึกษาด้าน IT","โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO","สร้างเว็บโปรไฟล์ให้ 1หน้า"]
        },
        marketing:{
            title:'Marketing',
            data:["VA 10hrs/month: วันละ 1 ชม./10 วัน * Tracking อย่างไรและให้คำปรึกษาพร้อมเแนะนำการตลาดให้ลูกค้าเบื้องต้น","Facebook AD'S : ให้บริการคำปรึกษา Influencer for promote (image + video+Live )","Google (Keyword Maximization) * AE ที่ผ่านการเทรนนิ่งให้คำปรึกษาลูกค้า","คิด Sales promotion 4 ครั้ง/เดือน"]
        },
        financial:{
            title:'Financial',
            data:["ร้านค้าใช้คนละครึ่ง","จดทะเบียนจัดตั้งห้างร้าน","รายได้เกิน 5 ล้าน แต่ไม่เกิน 10 ล้านบาท / ปี","รายได้เกิน 10 ล้านแต่ไม่เกิน 30 ล้านบาท / ปี"]
        },
    }
  return (
    <Row>
      <Col span={24}>
        <Card
          className="custom"
          style={{ borderRadius: 10, height: "100%", width: "100%" }}
        >
          <Row>
            <Typography.Title level={3} style={{color: "#46D68C"}}>{custom[topic].title}</Typography.Title>
          </Row>
          {custom[topic].data.map(text=>{
              return (
                <Row>
                <Image
                  src="/icons/draw-check-mark.svg"
                  className="check-icon"
                  width={15}
                  height={15}
                  alt="check"
                />
                <Typography.Text>{text}</Typography.Text>
              </Row>
              )
          })}
        </Card>
      </Col>
    </Row>
  );
};

export default CustomCard;
