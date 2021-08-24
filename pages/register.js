
import { Form, Input, Row, Button, Card, Divider, Typography, Col, Select, message } from 'antd'
import axios from 'axios'
import getToken from 'utils/getToken'
import { useEffect, useState } from 'react'
const FINANCE_ENDPOINT = process.env.NEXT_PUBLIC_FINANCE_ENDPOINT
const { Option } = Select

const Register = () => {
    const [form] = Form.useForm()

    const [province, setProvince] = useState()
    const [amphure, setAmphure] = useState()
    const [district, setDistrict] = useState()

    useEffect(() => {
        getProvince()
    }, [])

    const onProvinceChange = (value) => {
        getAmphure(value)
    }

    const onAmphureChange = (value) => {
        getDistrict(value)
    }

    const onDistrictChange = (value) => {
        form.setFieldsValue({ userweb_zip_code: "hello" })
    }

    const handleSubmit = async (value) => {
        const token = await getToken
        const sendToFinance = await axios.post(`${FINANCE_ENDPOINT}/api/Register/insertRegister`, { ...value, partner_type: "2" }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
            }
        })
        if (sendToFinance.status == 200) message.success('successRegister')
    }

    const getProvince = async () => {
        const resultProvince = await axios.post(`${FINANCE_ENDPOINT}/api/Register/SelectProvince`)
        if (resultProvince.data[0].status == 'Ok') {
            setProvince(resultProvince.data[0].Data)
        }
    }

    const getAmphure = async (value) => {
        const resultAmphure = await axios.post(`${FINANCE_ENDPOINT}/api/Register/SelectAmphure`, {}, { params: { Code_Data: value } })
        if (resultAmphure.data[0].status == 'Ok') {
            setAmphure(resultAmphure.data[0].Data)
        }
    }

    const getDistrict = async (value) => {
        const resultDistrict = await axios.post(`${FINANCE_ENDPOINT}/api/Register/SelectDistrict`, {}, { params: { Code_Data: value } })
        if (resultDistrict.data[0].status == 'Ok') {
            setDistrict(resultDistrict.data[0].Data)
        }
    }

    return (
        <Row justify='center'>

            <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={12}>
                <Card style={{ borderRadius: 5, padding: 5, width: '100%', height: '100%' }}>
                    <Row justify='center' align="middle" style={{ minHeight: '100vh' }}>
                        <img src="/images/register-logo.svg" width='70%' alt="register" />
                    </Row>
                </Card>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <Card style={{ borderRadius: 5, padding: 5, minHeight: '100vh' }}>
                    <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
                        <Col xs={22} sm={18} md={18} lg={18} xl={20} xxl={20}>
                            <Form ref={form} onFinish={handleSubmit}>
                                <Typography.Title level={3}>Sign up</Typography.Title>

                                <Form.Item
                                    label="ชื่อ"
                                    name="userweb_firstname"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="นามสกุล"
                                    name="userweb_lastname"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="ที่อยู่"
                                    name="userweb_address"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="จังหวัด"
                                    name="userweb_province_code"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select
                                        style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250}
                                        showSearch
                                        optionFilterProp="children"
                                        onChange={onProvinceChange}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {province && province.map(item => {
                                            return <Option
                                                key={item.province_code}
                                                value={item.province_code}>{item.province_name}
                                            </Option>
                                        })}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="อำเภอ"
                                    name="userweb_amphure_code"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select
                                        style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250}
                                        showSearch
                                        optionFilterProp="children"
                                        onChange={onAmphureChange}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {amphure && amphure.map(item => {
                                            return <Option
                                                key={item.amphure_code}
                                                value={item.amphure_code}>{item.amphure_name}
                                            </Option>
                                        })}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="ตำบล"
                                    name="userweb_district_code"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select
                                        style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250}
                                        showSearch
                                        optionFilterProp="children"
                                        onChange={onDistrictChange}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {district && district.map(item => {
                                            return <Option
                                                key={item.district_code}
                                                value={item.district_code}>{item.district_name}
                                            </Option>
                                        })}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="รหัสไปรษณีย์"
                                    name="userweb_zip_code"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="รหัสบัตรประชาชน"
                                    name="partner_tax"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="อีเมล์"
                                    name="email"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="รหัสผ่าน"
                                    name="userweb_password"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="ยืนยันรหัสผ่าน"
                                    name="confirm_password"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="เบอร์โทร"
                                    name="partner_tel"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>

                                <Form.Item
                                    label="Referrer Code"
                                    name="reffererCode"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input style={{ borderRadius: 50, background: 'rgb(240, 242, 245)', height: '40px' }} width={250} />
                                </Form.Item>
                                <Form.Item
                                    label=' '
                                    labelCol={{ span: 24 }}
                                >
                                    <Button
                                        htmlType="submit"
                                        style={{
                                            borderRadius: 50,
                                            width: '100%',
                                            background: '#1BB61D',
                                            color: '#fff',
                                            height: '40px',
                                        }}>
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>

                </Card>
            </Col>
        </Row >
    )
}

export default Register