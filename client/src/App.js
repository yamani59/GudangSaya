import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { First, Dashboard, Login, Register } from './pages'

const App = () => {
  return (
    <div className="bg-gray-200">
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </Router>
    </div>
    )
}

export default App