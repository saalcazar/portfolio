import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
)
