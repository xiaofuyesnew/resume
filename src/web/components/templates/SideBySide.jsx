import { Row, Col } from 'antd'

const SideBySide = () => {
  return (
    <Row className="min-h-[100%]">
      <Col span={8}></Col>
      <Col span={16} className="bg-slate-200"></Col>
    </Row>
  )
}

export default SideBySide
