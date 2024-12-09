import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import UserList from '../../components/specific/UserList'
import UserModal from '../../components/modal/UserModal'
import { Plus } from 'lucide-react'
import { users as SampleUsers } from '../../constants/data'
import { useDispatch, useSelector } from 'react-redux'
import { handleIsUserModalOpen } from '../../redux/slices/misc'

const Users = () => {
  const { isUserModalOpen } = useSelector((state) => state.misc)
  const dispatch = useDispatch()
  const [users, setUsers] = useState(SampleUsers)

  const handleOpenModal = () => {
    dispatch(handleIsUserModalOpen(true))
  }
  const handleCreateNewUser = (user) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, ...user }])
  }
  const handleDeleteUser = (user) => {
    setUsers((prev) => prev.filter(item => item.id !== user.id))
  }

  const handleEditUser = (user) => {
    setUsers((prev) => prev.map(item => item.id !== user.id ? item : { id: item.id, ...user }))

  }

  return (
    <AdminLayout>
      <div className=''>
        {isUserModalOpen && <UserModal users={users} onCreate={handleCreateNewUser} onEdit={handleEditUser} />}
        <div className='text-sm flex justify-end p-4 '>
          <button
            className='rounded-xl shadow-sm px-4 py-2.5 bg-blue-600 text-white
           hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center gap-2' onClick={handleOpenModal}>
            <Plus size={16} />
            Add User
          </button>
        </div>

        <div>
          <UserList users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Users
