import { Button, Card, Row, Col } from 'antd'
import Link from 'next/link'

const Index = () => {
  return <Card style={{ minWidth: '100vw', minHeight: '100vh' }}>
    <Row gutter={[50, 50]} justify='center' align='middle'>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Button type='ghost' style={{ width: 500, height: 50 }}>
            <Link href='/login'>
              <a>Goto Login Page</a>
            </Link>
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Button type='ghost' style={{ width: 500, height: 50 }}>
            <Link href='/register'>
              <a>Goto Register Page</a>
            </Link>
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Button type='ghost' style={{ width: 500, height: 50 }}>
            <Link href='/reset-password'>
              <a>Goto Reset Password Page</a>
            </Link>
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Button type='ghost' style={{ width: 500, height: 50 }}>
            <Link href='/social-register'>
              <a>Goto Social Register/Login Page</a>
            </Link>
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Button type='ghost' style={{ width: 500, height: 50 }}>
            <Link href='/verification'>
              <a>Goto Verification Page</a>
            </Link>
          </Button>
        </Row>
      </Col>
    </Row>
  </Card>
}
export default Index