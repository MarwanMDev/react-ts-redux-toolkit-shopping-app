import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../../store';

export interface AuthError {
  message: string;
}

export interface AuthState {
  isAuth: boolean;
  currentUser?: CurrentUser;
  isLoading: boolean;
  error: AuthError;
}

export interface CurrentUser {
  id: string;
  displayName: string;
  email: string;
  photo_url: string;
}

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: { message: 'An Error occurred' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = payload;
    },
    setAuthSuccess: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = payload;
      state.isAuth = true;
    },
    setLogOut: (state) => {
      state.isAuth = false;
      state.currentUser = undefined;
    },
    setAuthFailed: (state, { payload }: PayloadAction<any>) => {
      state.error = payload;
      state.isAuth = false;
    },
  },
});

export const {
  setAuthSuccess,
  setLogOut,
  setLoading,
  setAuthFailed,
} = authSlice.actions;

// export const useAuthSelector: TypedUseSelectorHook<RootState> =
//   useSelector;

export default authSlice.reducer;
