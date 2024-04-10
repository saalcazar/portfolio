import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Routing