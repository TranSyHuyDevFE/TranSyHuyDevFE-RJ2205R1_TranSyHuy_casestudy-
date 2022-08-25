import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameInit";
import { useSelector } from "react-redux";
export const StartGamePage = () => {
  const dispatch = useDispatch();
  const startGameHandler = () => {
    dispatch(startGame());
  };
  const backToLogin = () => {
    window.location.href = "/";
  };
  const user = useSelector((state) => state.loginState.userLogged_in);
  return (
    <>
      {user.username === undefined ? (
        <div className="h-screen w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
          <div className="flex flex-col justify-center text-white">
            <div className="max-w-[400px] w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg">
              <h4 className="font-bold">You are not logged in !</h4>
              <button
                className="w-full rounded-lg font-semibold shadow-lg my-5 py-2 transition duration-500 bg-teal-500 shadow-teal-500/30 hover:shadow-teal-500/70  "
                onClick={backToLogin}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
          <div className="flex flex-col justify-center text-white">
            <div className="max-w-[400px] w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg">
              <button
                className="w-full rounded-lg font-semibold shadow-lg my-5 py-2 transition duration-500 bg-teal-500 shadow-teal-500/30 hover:shadow-teal-500/70  "
                onClick={startGameHandler}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default StartGamePage;
