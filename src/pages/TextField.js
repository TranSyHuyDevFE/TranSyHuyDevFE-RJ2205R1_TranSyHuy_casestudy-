import React from "react";
import { ErrorMessage, useField } from "formik";
import "../App.css";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col text-gray-400 py-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${
          meta.touched && meta.error
            ? `rounded-lg border-2 border-rose-600 bg-gray-700 mt-2 p-2 focus:bg-gray-800`
            : `rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800`
        } `}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        className="text-red-700"
        name={field.name}
      />
    </div>
  );
}
