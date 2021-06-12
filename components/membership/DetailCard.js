import { Card, Row, Col, Typography } from "antd";
import { Button } from "antd/lib/radio";
import Image from "next/image";
import Link from "next/link";

const DetailCard = ({ price }) => {
  const membership = {
    free: {
      time: (
        <p>
          Free
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#B0B7C3" }}
          >
            / 6เดือน
          </span>
        </p>
      ),
      it: [
        "ให้คำปรึกษาด้าน IT",
        "เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account",
      ],
      marketing: [
        "Facebook AD'S : Free promote on Official Facebook page 1 time * เงื่อนไข: เป็น Content ของลูกค้าเอง",
        "ให้ระบบการเรียนการสอน Training ฟรี (การคิดแบบ OKRs และอื่นๆ)",
      ],
      financial: ["ร้านค้าใช้คนละครึ่ง", "ให้คำปรึกษา ยื่นภาษีขายออนไลน์ "],
    },
    business: {
      time: (
        <p>
          3,000
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#B0B7C3" }}
          >
            / เดือน
          </span>
        </p>
      ),
      it: [
        "โพสต์บทความ ให้ใน 100 เว็บบอร์ด เพื่อช่วย SEO",
        "ติดตั้งระบบเสริมให้ใน Line OA 1ระบบ",
      ],
      marketing: [
        "Facebook AD'S : ให้บริการคำปรึกษา Influencer for promote (image + video+Live )",
        "Facebook : เพิ่มรีวิวในกลุ่ม close group 1 กระทู้ * เงื่อนไข: AE เขียน Content ให้ลูกค้า",
      ],
      financial: ["จดทะเบียนจัดตั้งห้างร้าน", "จดทะเบียนจัดตั้งบริษัท"],
    },
    premium: {
      time: (
        <p>
          6,000
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#B0B7C3" }}
          >
            / เดือน
          </span>
        </p>
      ),
      it: [
        "เปิดร้านค้าใน Grab ให้ใช้งาน",
        "ปักหมุดร้านบนแผนที่ออนไลน์ ด้วย Google My Business",
      ],
      marketing: [
        "Google (Keyword Maximization)* AE ที่ผ่านการเทรนนิ่งให้คำปรึกษาลูกค้า",
        "VA 20hrs/month: วันละ 1 ชม./20 วัน* Tracking อย่างไรและให้คำปรึกษาพร้อมเแนะนำการตลาดให้ลูกค้าเบื้องต้น",
      ],
      financial: [
        "แจ้งเข้า - แจ้งออกพนักงานในระบบประกันสังคม",
        "นำส่งเงินสบทบประกันสังคมประจำเดือน",
      ],
    },
    scaleup: {
      time: (
        <p>
          9,000
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#B0B7C3" }}
          >
            / เดือน
          </span>
        </p>
      ),
      it: ["ให้คำปรึกษาด้าน IT", "สร้างเว็บโปรไฟล์ให้ 1 หน้า"],
      marketing: [
        "หา Influencer for promote (image + video+Live ) 2 คน / ทำ Logo ให้ทางร้านค้า (สามารถแก้ไขได้ 1 ครั้ง) / สินค้า",
        "คิด Sales promotion 3 ครั้ง/เดือน",
      ],
      financial: [
        "รายได้เกิน 5 ล้าน แต่ไม่เกิน 10 ล้านบาท / ปี",
        "งานยื่นช่างฝีมือผู้ชำนาญการต่างประเทศ workpermit/Visa",
      ],
    },
    dedicated: {
      time: (
        <p>
          12,000
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#B0B7C3" }}
          >
            / เดือน
          </span>
        </p>
      ),
      it: [
        "ให้คำปรึกษาด้าน IT",
        "เปิดใช้งาน Line OA พร้อมตั้งค่าพื้นฐาน * เงื่อนไข สร้างให้ 1 account",
      ],
      marketing: [
        "เพิ่มรีวิวในกลุ่ม close group 4 กระทู้ * เงื่อนไข: AE เขียน Content ให้ลูกค้า",
        "คิด Sales promotion 4 ครั้ง/เดือน",
      ],
      financial: [
        "งานเครื่องจักร BOI ",
        "งานยื่นวัตถุดิบ BOI, IC",
        "รายได้เกิน 10 ล้านแต่ไม่เกิน 30 ล้านบาท / ปี",
        "เอกสารลงบัญชี 101-200 รายการต่อเดือน",
      ],
    },
  };
  return (
    <Row>
      <Card className="membership-card" style={{ borderRadius: 10 ,height:'600px'}}>
        <Col span={24}>
          <Typography.Title level={2}>
            {membership[price].time}
          </Typography.Title>
        </Col>
        <Col span={24}>
          <Row>
            <Typography.Title level={4} style={{ color: "#46D68C" }}>
              IT
            </Typography.Title>
          </Row>
          {membership[price].it.map((text) => {
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
            );
          })}
        </Col>
        <Col span={24}>
          <Row>
            <Typography.Title level={4} style={{ color: "#46D68C" }}>
              Marketing
            </Typography.Title>
          </Row>
          {membership[price].marketing.map((text) => {
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
            );
          })}
        </Col>
        <Col span={24}>
          <Row>
            <Typography.Title level={4} style={{ color: "#46D68C" }}>
              Financial
            </Typography.Title>
          </Row>
          {membership[price].financial.map((text) => {
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
            );
          })}
        </Col>
        <Col span={24} style={{ marginTop: 30 }}>
          <Row justify="center">
            <Button
              style={{
                width: "80%",
                borderRadius: 15,
                fontSize: 20,
                height: "3rem",
                backgroundColor: "#1BB61D",
              }}
              className="package-select-btn"
            >
              <Row justify="center" style={{ marginTop: 5, color: "#ffffff" }}>
                เลือกแพ็คเก็จ
              </Row>
            </Button>
          </Row>
        </Col>
      </Card>
      <style jsx>{`
        .package-select-btn {
          color: #fff;
          background: #46d68c;
          border-radius: 10px !important;
        }
        .check-icon {
          filter: invert(58%) sepia(97%) saturate(1077%) hue-rotate(6deg)
            brightness(108%) contrast(94%);
        }
      `}</style>
    </Row>
  );
};

export default DetailCard;
