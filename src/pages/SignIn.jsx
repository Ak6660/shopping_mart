import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../userSlice/userSlice";

const userData = {
  userName: "admin-96",
  password: "admin-96",
};
const initialState = {
  userName: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "user/input":
      return { ...state, userName: action.payLoad };
    case "pass/input":
      return { ...state, password: action.payLoad };
    case "clear":
      return { ...state, ...initialState };
    default:
      return state;
  }
}

const SignIn = () => {
  const [{ userName, password }, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    setErrors({});
    const error = {};
    e.preventDefault();
    if (!userName) {
      error.userName = "Username is required";
    }

    if (!password) {
      error.password = "Password is required";
    }
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      if (userName == userData.userName && password == userData.password) {
        localStorage.setItem(
          "userData",
          JSON.stringify({ userName, password }),
          dispatch(login(userData, [], [])),
        );
        navigate("/products");
      }
    }
  };

  const handleUserChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "user/input", payLoad: value });
  };

  const handlePassChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "pass/input", payLoad: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <p>Please Enter admin-96 as username and password</p>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              {errors.userName ? (
                <p className="text-red-400 text-center capitalize">
                  {errors.userName}
                </p>
              ) : (
                ""
              )}
              <label htmlFor="userName" className="sr-only">
                UserName
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                value={userName}
                onChange={handleUserChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500  focus:z-10 sm:text-sm ${errors.userName ? " border-red-300 focus:border-red-500" : "focus:border-gray-500"}`}
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlePassChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 ${errors.password ? " border-red-300  focus:border-red-500" : "focus:border-gray-500"} focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password ? (
                <p className="text-red-400 text-center capitalize">
                  {errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-gray-400"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed */}
                <svg
                  className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2c-.93 0-1.74.4-2.32 1.01l1.47 1.47C8.05 4.56 8.52 4 9 4c.55 0 1 .45 1 1v2.59l2.79 2.79c.2.2.3.45.3.71s-.1.51-.3.7a1.02 1.02 0 0 1-1.42 0L9 8.41V11c0 .55-.45 1-1 1-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v.59l2.29 2.29a1.003 1.003 0 1 1-1.42 1.42l-2.29-2.3a.983.983 0 0 1-.3-.7c0-.26.1-.51.3-.71L10 6.59V4c0-.55.45-1 1-1 .48 0 .95.56 1.32 1.01l1.47-1.47C14.74 2.4 13.93 2 13 2H9zM7 14c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>

        <p>This website is for demostration purpose only</p>
      </div>
    </div>
  );
};

export default SignIn;
