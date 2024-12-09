import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react'
import { Menu } from 'lucide-react'





const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='relative flex h-dvh'>

      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 lg:hidden z-20'
          onClick={toggleSidebar}
        />
      )}

  
      <div className={`
        fixed lg:static w-[280px] h-full bg-white z-30
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar />
      </div>

    
      <div className='flex-1 overflow-auto p-3'>
        <div className='lg:hidden mb-4'>
          <button onClick={toggleSidebar} className='p-2 hover:bg-gray-100 rounded-lg'>
            <Menu size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}


export default AdminLayout
