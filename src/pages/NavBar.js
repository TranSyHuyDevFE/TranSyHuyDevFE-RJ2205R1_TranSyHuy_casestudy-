import React from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";

export default function NavBar() {
  const alert = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Do you want to quit ?",
      text: "You will log out and result won't save !",
      showDenyButton: true,
      confirmButtonText: "Continue",
      denyButtonText: `Quit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Go on!", "", "success");
      } else if (result.isDenied) {
        window.location.href = "/";
      }
    });
  };
  const userLogged_in = useSelector((state) => state.loginState.userLogged_in);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed  bg-gray-900  px-4">
      <div>
        <h1 className="scale-75 dark:text-black text-5xl font-logo ml-2">
          Quizz!
        </h1>
      </div>

      <ul className="md:flex">
        {userLogged_in.username === undefined ? null : (
          <h3 className="underline underline-offset-4">
            Hi,&nbsp;{userLogged_in.username}
          </h3>
        )}
        <button
          onClick={alert}
          className="shadow-sm bg-red-900 rounded-lg px-4 ml-2 hover:shadow-red-50/50"
        >
          {userLogged_in.username === undefined ? null : "Quit"}
        </button>
      </ul>
    </div>
  );
}
