import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- İşte eksik olan parça buydu
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Uygulamayı Router ile sarmalıyoruz */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)