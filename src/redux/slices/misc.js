import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    isUserModalOpen: false,
    isRoleModalOpen: false,
    isRoleEdit: false,
    isUserEdit: false,
    userCurrIndex: -1,
    roleCurrIndex: -1,
}

// Create a slice with a reducer to handle state changes
const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        handleIsUserModalOpen: (state, action) => {

            state.isUserModalOpen = action.payload;
        },
        handleIsUserEdit: (state, action) => {
            state.isUserEdit = action.payload;
        },
        handleSetUserCurrIndex: (state, action) => {
            state.userCurrIndex = action.payload;
        },
        handleIsRoleModalOpen: (state, action) => {

            state.isRoleModalOpen = action.payload;
        },
        handleIsRoleEdit: (state, action) => {
            state.isRoleEdit = action.payload;
        },
        handleSetRoleCurrIndex: (state, action) => {
            state.roleCurrIndex = action.payload;
        }


    },
});

// Export the actions
export const {

    handleIsUserModalOpen,
    handleIsUserEdit,
    handleSetUserCurrIndex,
    handleIsRoleModalOpen,
    handleIsRoleEdit,
    handleSetRoleCurrIndex,

} = miscSlice.actions;

// Export the reducer
export default miscSlice.reducer;