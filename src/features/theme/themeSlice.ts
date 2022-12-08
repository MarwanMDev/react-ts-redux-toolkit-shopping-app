import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: localStorage.getItem('darkTheme')
      ? localStorage.getItem('darkTheme')
      : false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem(
        'darkTheme',
        JSON.stringify(state.darkTheme)
      );
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) =>
  state.theme.darkTheme;

export default themeSlice.reducer;
