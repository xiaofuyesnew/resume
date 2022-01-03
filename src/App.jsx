import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState({})

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col items-center p-[12px] relative">
      <div className="w-[800px] min-h-[100%] shadow-md">
        简历主体
        <div className="before:content-['这是一个伪类'] before:text-[20px]"></div>
      </div>
      <div className="fixed left-[calc(50%+420px)] top-0 w-[140px] h-screen p-[12px]">
        简历操作
      </div>
    </div>
  )
}

export default App
