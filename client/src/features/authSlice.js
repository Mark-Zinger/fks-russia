import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // openModal: () => console.log('Функция не определена'),
    value: 1
  },
  reducers: {
    // setOpenModal: (state, action) => {
    //   state.openModal = action.payload;
    // },
  },
});

export const { setOpenModal } = authSlice.actions;

export const selectCount = state => state.auth.openModal;

export default authSlice.reducer;
