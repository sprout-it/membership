import { Button, Card, Row } from 'antd'
import Link from 'next/link'
const Index = () => {
  return <Row justify='center' align='middle'>
    <Card>
      <Button type='ghost'>
        <Link href='/login'>
          <a>Goto Login Page</a>
        </Link>
      </Button>
      <Button type='ghost'>
        <Link href='/register'>
          <a>Goto Register Page</a>
        </Link>
      </Button>
    </Card>
  </Row>
}
export default Index