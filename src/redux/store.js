import { configureStore } from "@reduxjs/toolkit";
import miscReducer from './slices/misc'; // Import the correct reducer

// Create and configure the store
const store = configureStore({
    reducer: {
        misc: miscReducer, // Use the correct reducer reference
    },
});

export default store;