import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { FcRefresh } from "react-icons/fc";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogged_in = useSelector((state) => state.loginState.userLogged_in);

  useEffect(() => {
    if (userLogged_in.username) {
      navigate("/start");
    }
  }, [userLogged_in, navigate]);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(10, "Must be 10 character or less")
          .required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        dispatch({ type: "LOGIN", payload: values });
      }}
    >
      {() => (
        <div className="h-screen w-full grid bg-gradient-to-b from-gray-400 to-gray-300">
          <div className="flex flex-col justify-center text-white">
            <Form className="max-w-[400px] w-full mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 px-8 rounded-lg">
              <h2 className="text-4xl dark:text-white font-bold text-center underline underline-offset-2">
                Login
              </h2>
              <TextField label="User Name" name="username" type="text" />
              <TextField label="Password" name="password" type="password" />

              <button
                className="w-full rounded-lg font-semibold shadow-lg my-5 py-2 bg-teal-500 shadow-teal-500/30 hover:shadow-teal-500/70"
                type="submit"
              >
                Submit
              </button>
              <button
                className="font-semibold shadow-lg  bg-white shadow-red-500/30 hover:shadow-red-500/70"
                type="reset"
              >
                <FcRefresh size={20} />
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
