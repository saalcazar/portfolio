import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default Routing