import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Kiem_tra/App'
//import './index.css'
//import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
