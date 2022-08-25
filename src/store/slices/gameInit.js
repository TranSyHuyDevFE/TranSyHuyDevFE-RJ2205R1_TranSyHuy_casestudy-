import { createSlice } from "@reduxjs/toolkit";
import * as stages from "../../utils/constants";
import { fetchQuestionSuccess, fetchQuestionFail } from "./game";
const initialState = {
  stage: stages.START_GAME,
};
const gameState = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    startGame(state, action) {
      state.stage = stages.FETCHING_GAME;
    },
    cancelGame(state, action) {
      state.stage = stages.START_GAME;
    },
    finnishGame(state, action) {
      state.stage = stages.END_GAME;
    },
    restartGame(state, action) {
      state.stage = stages.START_GAME;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionSuccess, (state) => {
        state.stage = stages.GAME;
      })
      .addCase(fetchQuestionFail, (state) => {
        state.stage = stages.START_GAME;
      });
  },
});
export const { startGame, cancelGame, finnishGame, restartGame } =
  gameState.actions;
export default gameState.reducer;
