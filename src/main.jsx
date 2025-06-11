import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // импорт глобальных стилей
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
