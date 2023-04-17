import { IUser } from "@/interfaces/user.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserSliceInitialState {
  user: IUser | null;
}

const userSliceInitialState: IUserSliceInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userSliceInitialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
