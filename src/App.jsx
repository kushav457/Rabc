import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './pages/admin/Users'
import Roles from './pages/admin/Roles'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </div>
  )
}

export default App
