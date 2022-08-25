import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../store/slices/game";
import { finnishGame } from "../store/slices/gameInit";
const GamePage = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);
  const currentQuestion = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
  );
  const score = useSelector((state) => state.quiz.score);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const answerHandler = (answer) => {
    dispatch(answerQuestion({ answer }));
  };
  const endGameHandler = () => {
    dispatch(finnishGame());
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="h-screen w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
      <div className="flex flex-col justify-center text-white">
        <div className="max-w-[400px] w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg">
          <div className="flex justify-between ">
            <p className="text-1xl text-white font-bold">
              {currentQuestionIndex} / 15
            </p>
            <p className="text-2xl text-white font-bold">
              Score: &nbsp; {score}
            </p>
          </div>

          <p className="text-red-300 w-20 text-2xl mx-auto px-7 py-3 font-semibold border rounded-full dark:border-gray-100 dark:text-gray-100">
            {timeLeft}
          </p>

          <p
            className="py-6 text-3xl italic"
            dangerouslySetInnerHTML={{ __html: currentQuestion }}
          ></p>
          <div className=" grid grid-cols-2 gap-5 ">
            <button
              className="bg-green-500 p-2 font-bold rounded-full shadow shadow-green-500/60 transition ease-in duration-300hover:shadow-green-500/30 hover:bg-green-600 "
              onClick={() => answerHandler("True")}
            >
              True
            </button>
            <button
              className="bg-red-500 p-2 font-bold rounded-full shadow shadow-red-500/60 transition ease-in duration-300 hover:shadow-red-500/30 hover:bg-red-600 "
              onClick={() => answerHandler("False")}
            >
              False
            </button>
          </div>
          <button
            className="mt-6 ml-32 p-2 w-20 font-bold bg-cyan-500 rounded-full shadow shadow-cyan-500/60 transition ease-in duration-300 hover:shadow-cyan-500/30 hover:bg-cyan-600"
            onClick={endGameHandler}
          >
            Finished
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
