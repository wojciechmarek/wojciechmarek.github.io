import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './views/_Layout/Layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)