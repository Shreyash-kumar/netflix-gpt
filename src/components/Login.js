import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

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
          className="p-3 my-4 w-full rounded-sm bg-gray-800"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-3 my-4 w-full rounded-sm bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 my-6 rounded-sm bg-red-600 w-full">
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
