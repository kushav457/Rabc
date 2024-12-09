import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { permissions } from "../../constants/data";
import { handleIsRoleEdit, handleIsRoleModalOpen, handleSetRoleCurrIndex } from "../../redux/slices/misc";

const RoleModal = ({ roles, onCreate, onEdit }) => {
  const { isRoleEdit, roleCurrIndex: index } = useSelector(
    (state) => state.misc
  );
  const [formData, setFormData] = useState({ name: "", permissions: [] });
  const dispatch = useDispatch();


  useEffect(() => {
    if (isRoleEdit && roles[index]) {
      setFormData({
        name: roles[index].name,
        permissions: roles[index].permissions,
      });
    }
  }, [isRoleEdit, roles])

  // Handle permission toggle
  const handlePermissionChange = (permission, isChecked) => {
    setFormData((prev) => {
      if (isChecked) {
        // Add permission if it's not already in the list
        return {
          ...prev,
          permissions: [...prev.permissions, permission]
        };
      } else {
        // Remove permission if it exists in the list
        return {
          ...prev,
          permissions: prev.permissions.filter(p => p !== permission)
        };
      }
    });
  };

  const handleCloseRoleModal = () => {
    dispatch(handleIsRoleModalOpen(false))
    dispatch(handleIsRoleEdit(false))
    dispatch(handleSetRoleCurrIndex(-1))
    setFormData({ name: "", permissions: [] });
  }

  const handleEditRole = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "") return
    onEdit({ id: index+1, ...formData });
    handleCloseRoleModal()
  };

  const handleCreateRole = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "") return
    onCreate(formData);
    handleCloseRoleModal()

  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[26rem] border border-gray-100 animate-[fadeIn_0.2s_ease-in-out]">
        <form
          onSubmit={isRoleEdit ? handleEditRole : handleCreateRole}
          className="p-4 rounded-xl "
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">
              {isRoleEdit ? "Edit Role" : "Create New Role"}
            </h3>
            <button
              type="button"
              onClick={handleCloseRoleModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Role Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border rounded-md px-3 py-2 mb-4"
              placeholder="Enter role name"
            />
            <div>
              <h6 className="text-xs font-semibold mb-2">Permissions</h6>
              <div className="grid grid-cols-2 gap-2">
                {Object.values(permissions).map((permission, idx) => (
                  <div key={idx} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`permission-${idx}`}
                      checked={formData.permissions.includes(permission)}
                      onChange={(e) => handlePermissionChange(permission,e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor={`permission-${idx}`} className="text-sm">
                      {permission}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              {isRoleEdit ? "Save Changes" : "Create Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleModal;
