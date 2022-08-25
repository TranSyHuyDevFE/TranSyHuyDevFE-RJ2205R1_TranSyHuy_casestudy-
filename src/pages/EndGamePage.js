import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "react-confetti";
import { restartGame } from "../store/slices/gameInit";
export const EndGamePage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const score = useSelector((state) => state.quiz.score);
  const restartHandler = () => {
    dispatch(restartGame());
  };
  return (
    <div className="h-full w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
      <Confetti />
      <div className="flex flex-col justify-center text-white">
        <div className="max-w-[400px] mt-44 w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center">
            Your score was {score} / 15
          </h2>

          <button
            className="mt-6 ml-24 px-4 w-30 text-1xl font-bold bg-green-500 rounded-lg shadow shadow-green-500/60 transition ease-in duration-300 hover:shadow-green-500/30 hover:bg-green-600"
            onClick={restartHandler}
          >
            Restart Game
          </button>
          {answers.map((answer, index) => {
            return (
              <div className="border-b-2 flex justify-between py-4">
                {index + 1}.
                <p dangerouslySetInnerHTML={{ __html: answer.question }}></p>
                <span
                  className={`p-2 ${
                    answer.correctAnswer === answer.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {answer.answer}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EndGamePage;
