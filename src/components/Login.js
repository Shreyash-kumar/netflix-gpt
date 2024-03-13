import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidForm } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidForm(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-lg text-white"
        action=""
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-3 my-4 w-full rounded-sm bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 my-4 w-full rounded-sm bg-gray-800"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-3 my-4 w-full rounded-sm bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
        <button className="p-2 my-6 rounded-sm bg-red-600 w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already a Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
