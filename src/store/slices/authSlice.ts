import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../types/auth";

const initialState: AuthState = {
  id: undefined,
  token: undefined,
  profiles: [],
  isLoggedIn: false,
  error: null,
  checking: true, // empieza en true hasta validar token
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (
      state,
      action: PayloadAction<{ id: string; token: string; profiles?: string[] }>
    ) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.profiles = action.payload.profiles || [];
      state.isLoggedIn = true;
      state.checking = false;
    },
    onLogout: (state) => {
      state.id = undefined;
      state.token = undefined;
      state.profiles = [];
      state.isLoggedIn = false;
      state.checking = false;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoggedIn = false;
      state.checking = false;
    },
  },
});

export const { onLogin, onLogout, onSetError } = authSlice.actions;
export default authSlice.reducer;
