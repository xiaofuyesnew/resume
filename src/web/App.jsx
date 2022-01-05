import { useState, useEffect } from 'react'
import { Button } from 'antd'

import { Provider } from './store'
import Resume from './components/Resume'

const App = () => {
  const [data, setData] = useState({})

  const [drawVisible, setDrawVisible] = useState({
    visible: false,
    child: false
  })

  return (
    <Provider>
      <div className="w-screen h-screen overflow-auto flex flex-col items-center p-[12px] relative">
        <Resume data={data} />
        <div className="fixed left-[calc(50%+420px)] top-0 w-[140px] h-screen p-[12px] flex items-center flex-col">
          <Button type="primary" className="w-[100%] mb-[10px]">
            简历配置
          </Button>
          <Button type="primary" className="w-[100%] mb-[10px]">
            导入配置
          </Button>
          <Button type="primary" className="w-[100%] mb-[10px]">
            保存 PDF
          </Button>
        </div>
      </div>
    </Provider>
  )
}

export default App
