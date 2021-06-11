import { Card, Row, Col } from 'antd'
import { Button } from 'antd/lib/radio'
import Image from 'next/image'

const MembershipCard = ({ price }) => {
    return <>
        <Card className='membership-card' style={{ borderRadius: 10 }}>
            <Col span={24}>{price}</Col>
            <Col span={24}>
                <Image src='/icons/draw-check-mark.svg' className="check-icon" width={15} height={15} alt="check" /> IT
            </Col>
            <Col span={24}>
                <Image src='/icons/draw-check-mark.svg' className="check-icon" width={15} height={15} alt="check" /> Financial
            </Col>
            <Col span={24}>
                <Image src='/icons/draw-check-mark.svg' className="check-icon" width={15} height={15} alt="check" /> Marketing
            </Col>
            <Col span={24}>
                <Row justify='end'>
                    อ่านรายละเอียดเพิ่มเติม
                </Row>
            </Col>
            <Col span={24}>
                <Row justify='center'>
                    <button className="package-select-btn">
                        เลือกแพ็คเก็จ
                    </button>
                </Row>
            </Col>
        </Card >
        <style jsx>{`
            .package-select-btn{
                color: #fff;
                background: #46D68C;
                border-radius: 10px !important;
            }
            .check-icon{
                    filter: invert(58%) sepia(97%) saturate(1077%) hue-rotate(6deg) brightness(108%) contrast(94%);
                }
        `}</style>
    </>
}

export default MembershipCard