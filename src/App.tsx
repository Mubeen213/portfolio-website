import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Portfolio } from './pages/Portfolio'
import './styles/index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
