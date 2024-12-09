import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Plus } from 'lucide-react'
import RoleList from '../../components/specific/RoleList'
import { roles as SampleRoles } from '../../constants/data'
import RoleModal from '../../components/modal/RoleModal'
import { useDispatch, useSelector } from 'react-redux'
import { handleIsRoleModalOpen } from '../../redux/slices/misc'

const Roles = () => {
  const [roles, setRoles] = useState(SampleRoles)
  const { isRoleModalOpen } = useSelector((state) => state.misc)
  const dispatch=useDispatch()
  const handleEditRole = (role) => {
    setRoles((prev) => prev.map(item => item.id !== role.id ? item : {  ...role }))
  }

  const handleOpenModal = () =>{
    dispatch(handleIsRoleModalOpen(true))
  }

  const handleCreateRole = (role) => {
    setRoles((prev) => [...prev, { id: prev.length + 1, ...role }])
  }
  const handleDeleteRole = (name) => {
    setRoles((prev) => prev.filter(item => item.name !== name))
  }
  return (
    <AdminLayout>
      {isRoleModalOpen && <RoleModal onCreate={handleCreateRole} onEdit={handleEditRole} roles={roles} />}
      <div className='p-4 bg-white'>
        <div className='flex justify-end'>
          <button
            className='shadow-md rounded-xl bg-blue-600 text-white px-4 py-3 text-sm text-nowrap flex gap-3 items-center'
            onClick={handleOpenModal}
            >
            <Plus size={16} />
            <span>Add role</span>
          </button>
        </div>
        <hr className='my-5' />
        <div className=''>
          <RoleList roles={roles} onDelte={handleDeleteRole} />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Roles