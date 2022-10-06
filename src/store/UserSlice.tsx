import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserState = {
  email: string | null,
  token: string | null,
  id: string | null,
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    }
  }
})

export default UserSlice.reducer;
export const { setUser, removeUser } = UserSlice.actions;