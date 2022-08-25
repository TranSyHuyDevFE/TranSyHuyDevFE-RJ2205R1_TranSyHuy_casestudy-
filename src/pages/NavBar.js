import React from "react";
import swal from "sweetalert";

import { useSelector } from "react-redux";

export default function NavBar() {
  const alert = () => {
    swal({
      title: "Are you sure?",
      text: "You will log out && result won't save!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        window.location.href = "/";
      } else {
        swal("Go on!", {
          icon: "success",
        });
      }
    });
  };
  const userLogged_in = useSelector((state) => state.loginState.userLogged_in);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed  bg-gray-900  px-4">
      <div>
        <h1 className="scale-75 text-white text-5xl font-logo ml-2">Quizz!</h1>
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
