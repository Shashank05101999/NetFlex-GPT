import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issigninform, setissigninform] = useState(true);

  const toggleSignInForm = () => {
    setissigninform(!issigninform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg"
          alt="Backgroud-Image"
        />
      </div>
      <form className=" w-4/12  absolute mx-auto left-0 right-0 my-32 bg-black bg-opacity-85 p-12 rounded-lg shadow-2xl">
        <h1 className=" font-semibold text-white text-3xl m-2">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
            className="  rounded-lg py-3 m-2 p-12 w-full bg-gray-900 text-white"
            type="text"
            placeholder="Enter Your Name "
          />
        )}
        <input
          className="  rounded-lg py-3 m-2 p-12 w-full bg-gray-900 text-white"
          type="text"
          placeholder="Email-Address"
        />
        <input
          className="rounded-lg py-3 m-2 p-12 bg-slate-900 w-full text-white"
          type="password"
          placeholder="Passwords"
        />
        <button className="p-3 m-2 mt-4  w-full bg-red-500 hover:bg-orange-700  text-center font-semibold text-white rounded-lg">
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <h2
          className="text-white  hover:text-red-500 cursor-pointer p-6"
          onClick={() => toggleSignInForm()}
        >
          {issigninform
            ? "New to  Netflex? Sign-Up Now"
            : "Already Have Account ? Sign-In Now "}
        </h2>
      </form>
    </div>
  );
};

export default Login;
