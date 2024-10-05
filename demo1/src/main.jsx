import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import AppDn from './AppDn.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AppDn />
    
  </StrictMode>

)
