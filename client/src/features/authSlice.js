import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setClose: (state) => {
      state.isOpen = false
    },

  },
});

export const { setOpen, setClose } = authSlice.actions;

export const AuthModalSelector = state => state.auth;

export default authSlice.reducer;
