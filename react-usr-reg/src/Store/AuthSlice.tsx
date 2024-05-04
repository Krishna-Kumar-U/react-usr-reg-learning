import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userDetails: UserDetails | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string, userDetails: UserDetails }>) {
      state.token = action.payload.token;
      state.userDetails = action.payload.userDetails;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;