import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  selectedKind: null,
  selectedDate: null,
};
export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFilesData: (state, action) => {
      state.files = action.payload;
    },
    setFilesDataLogOut:(state) => {
      state.files= ''
    },
    setSelectedKind: (state, action) => {
      state.selectedKind = action.payload
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    }
  },
});

export const { setFilesData, setFilesDataLogOut, setSelectedKind, setSelectedDate } = filesSlice.actions;

export const getFiles = (state) => state.files;

export default filesSlice.reducer;
