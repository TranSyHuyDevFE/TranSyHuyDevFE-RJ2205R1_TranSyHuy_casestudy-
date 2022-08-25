import React from "react";
import { cancelGame } from "../store/slices/gameInit";
import { useDispatch } from "react-redux";

export const FetchingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
      <div className="flex flex-col justify-center text-white">
        <div className="max-w-[400px] w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg flex flex-cols justify-center items-center">
          <div className=" grid grid-cols-1  gap-5 ">
            <div className="w-16 h-16 border-4 border-green-400 border-dashed rounded-full animate-spin "></div>
            <button
              className="bg-red-500 py-2 rounded-lg shadow shadow-red-500/60 transition ease-in duration-300 hover:shadow-red-500/30 hover:bg-red-600 "
              onClick={() => dispatch(cancelGame())}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FetchingPage;
