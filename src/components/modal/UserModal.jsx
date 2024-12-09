import React, { useEffect, useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsUserEdit, handleIsUserModalOpen, handleSetUserCurrIndex } from '../../redux/slices/misc';

const UserModal = ({ users,onCreate, onEdit }) => {
  const { isUserEdit,userCurrIndex:index } = useSelector((state) => state.misc);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', status: '' });
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(users,index)
    setFormData({...users[index]});
  },[isUserEdit,users])

  const handleCloseModal = () => {
    dispatch(handleIsUserModalOpen(false));
    setFormData({ name: '', email: '', role: '', status: '' })
    dispatch(handleSetUserCurrIndex(-1)) 
    dispatch(handleIsUserEdit(false))
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    onEdit({ id:index,...formData}); 
    handleCloseModal();
  };

  const handleOnCreateUser = (e) => {
    e.preventDefault();
    onCreate(formData);
    handleCloseModal();
  };

  const handleOnCancel = () => {
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[26rem] border border-gray-100 animate-[fadeIn_0.2s_ease-in-out]">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            {isUserEdit ? 'Edit User' : 'Create New User'}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors"
            onClick={handleCloseModal}
          >
            <X size={18} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={isUserEdit ? handleEditUser : handleOnCreateUser}>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
              placeholder="Enter user name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="block w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
            <select
              className="block w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 appearance-none bg-white pr-10"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="absolute right-3 top-[34px] pointer-events-none">
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">Role</label>
            <select
              className="block w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 appearance-none bg-white pr-10"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </select>
            <div className="absolute right-3 top-[34px] pointer-events-none">
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-end space-x-2.5 pt-2">
            <button
              type="button"
              className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={handleOnCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              {isUserEdit ? 'Update' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
