import { StrictMode } from 'react'
import { render } from 'react-dom'
// import 'tdesign-react/es/style/index.css'
import './index.css'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
