import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncAuthAction } from "../../../store/redux/auth/actions/authAction";
import { useTypedSelector } from "../../../store/redux/rootReducer";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state.auth);

  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(asyncAuthAction(value, password));
  };
  return (
    <div className="h-screen pt-16 md:pt-32 px-4">
      <form
        onSubmit={(event) => submitHandler(event)}
        className="max-w-md mx-auto p-4 py-8 md:p-10 rounded shadow-lg bg-base-200 flex flex-col gap-6"
      >
        {state.error ? (
          <p className="text-error">Username or password invalid</p>
        ) : null}
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">
              <span className="text-error">*</span> Your Username
            </span>
          </label>
          <input
            type="text"
            id="username"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="@username"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">
              <span className="text-error">*</span> Your Password
            </span>
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <button
          className={`btn btn-accent mt-4 gap-1 ${
            state.loading ? "loading" : ""
          }`}
        >
          LOGIN
        </button>
        <p className="text-left">
          CREATE A NEW ACCOUNT{" "}
          <Link className="text-info underline underline-offset-2" to="/">
            HERE
          </Link>
        </p>
      </form>
    </div>
  );
};
