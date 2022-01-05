import SideBySide from './templates/SideBySide.jsx'
import Spark from './templates/Spark.jsx'
import WaterFall from './templates/WaterFall.jsx'

const Template = ({ name }) => {
  switch (name) {
    case 'side_by_side':
      return <SideBySide />
    case 'spark':
      return <Spark />
    case 'water_fall':
      return <WaterFall />
    default:
      return <></>
  }
}

export default Template
