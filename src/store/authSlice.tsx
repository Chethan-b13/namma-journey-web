import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  phoneNumber?: string | null;
  photoURL: string | null;
  token: string | null;
}

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
  phoneNumber: null,
  photoURL: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
