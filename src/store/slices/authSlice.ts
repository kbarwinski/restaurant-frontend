import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface AuthState {
    email: string | null;
    userRole: string | null;
    token: string | null;
}

const initialState: AuthState = {
    token: null,
    email: null,
    userRole: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login (state, action: PayloadAction<AuthState>) {
        state.email = action.payload.email;
        state.userRole = action.payload.userRole;
        state.token = action.payload.token;

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
    },
    logout (state) {
        state.email = null;
        state.userRole = null;
        state.token = null;
        
        axios.defaults.headers.common['Authorization'] = '';
    }
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
