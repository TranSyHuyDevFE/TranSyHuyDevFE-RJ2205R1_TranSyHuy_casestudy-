import { combineReducers } from "redux";
import gameState from "./slices/gameInit";
import loginState from "./slices/loginInit";
import quiz from "./slices/game";
export default combineReducers({ gameState, quiz, loginState });
