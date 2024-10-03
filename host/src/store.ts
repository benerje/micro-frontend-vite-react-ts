// shared/store.ts
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Step 1: Create a slice for the shared input value
const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Step 2: Export the actions
export const { setInputValue } = inputSlice.actions;

// Step 3: Create and configure the Redux store
const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
