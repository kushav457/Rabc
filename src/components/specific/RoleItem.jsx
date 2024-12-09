import { Cross, Edit, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleIsRoleEdit, handleIsRoleModalOpen, handleSetRoleCurrIndex } from '../../redux/slices/misc'

const RoleItem = ({name,permissions,onDelte,id}) => {
    const dispatch=useDispatch()
    const handleEditRole=()=>{
        dispatch(handleIsRoleModalOpen(true))
        dispatch(handleIsRoleEdit(true))
        dispatch(handleSetRoleCurrIndex(id))
    }


  return (
    <div className='bg-white  shadow  rounded-lg p-4'>
        <div className='mb-3 font-semibold flex justify-between'>
            <span>{name}</span>
            <div className='flex gap-2 '>
                <Edit  className="text-blue-600 hover:text-blue-900" onClick={handleEditRole} size={16}/>
                <Trash className="text-red-600 hover:text-red-900" onClick={()=>onDelte(name)} size={16}/>
            </div>
        </div>
        <h6 className='text-xs text-slate-400 mb-2'>Permission Access</h6>
        <div className='flex text-xs gap-3 flex-wrap '>
            {
                permissions.map((item,index)=>(
                    <div key={index} className='bg-green-100 px-3 py-1 rounded-xl text-green-800 hover:bg-green-50 hover:font-semibold'>{item}</div>
                ))
            }
        </div>
    </div>
  )
}

export default RoleItem