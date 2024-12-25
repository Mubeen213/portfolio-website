import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/index'
import { Portfolio } from './pages/Portfolio'
import './styles/index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
