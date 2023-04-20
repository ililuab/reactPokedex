import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Github from './components/Github';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/github" element={<Github />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
