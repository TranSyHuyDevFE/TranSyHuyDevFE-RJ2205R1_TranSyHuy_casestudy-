import { createSlice } from "@reduxjs/toolkit";
import * as stages from "../../utils/constants";
const initialState = { type: stages.LOGIN_SUCCESS, userLogged_in: {} };
const loginState = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    loginGame(state, action) {
      state.userLogged_in = action.payload.userLogged_in;
      state.type = stages.LOGIN_SUCCESS;
    },
  },
});
export const { loginGame } = loginState.actions;
export default loginState.reducer;
