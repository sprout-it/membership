
import { Col, Row } from 'antd'

const Our = () => {
    return <Row justify='center' align='middle' className='our-layout'>
        <Col span={12}></Col>
        <Col span={12}>
            <Row justify='center' align='middle'>
                <Col span={24}>เราคือใคร</Col>
                <Col span={24}>
                    Our Vision & Mission
                    เราต้องการนำแนวคิดที่ดีที่สุดจากความคิดเดิม และปรับใช้ใหม่ให้เหมาะกับวิถีชีวิตสมัยใหม่
                    เราต้องการทำสิ่งนี้ในแบบที่จำกัดความเสียหายสำหรับอนาคตต่อโลกของเรา
                    ปรับปรุงสภาพแวดล้อมความเป็นอยู่ และให้ผลตอบแทนที่เป็นธรรมสำหรับงานประจำวันที่ยุติธรรม
                </Col>
            </Row>
        </Col>
        <style jsx>{`
            .our-layout{
                background: #f7f7f7;
            }
        `}
        </style>
    </Row>
}
export default Our