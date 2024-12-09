import React, { useState } from 'react'
import { heading } from '../../constants/data'
import { Edit2Icon, Trash2Icon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { handleIsUserModalOpen, handleSetUserCurrIndex, handleIsUserEdit } from '../../redux/slices/misc'

const UserList = ({ users, onDelete }) => {

    const dispatch = useDispatch()

    const hnadleEditUserDetails = (index) => {
        dispatch(handleIsUserModalOpen(true))
        dispatch(handleSetUserCurrIndex(index))
        dispatch(handleIsUserEdit(true))
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            {
                                heading?.map((item, index) => (
                                    <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex gap-2 ">
                                        <button className="text-blue-600 hover:text-blue-900 "
                                            onClick={() => hnadleEditUserDetails(index)}
                                        >
                                            <Edit2Icon size={16} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900"
                                            onClick={() => onDelete(user)}
                                        >
                                            <Trash2Icon size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
