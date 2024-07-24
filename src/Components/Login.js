import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidate } from "../Utils/Validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/UserSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [issigninform, setissigninform] = useState(true);
  const [errorMessage, seterrormessage] = useState(null);

  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setissigninform(!issigninform);
  };
  const handleButtonClick = () => {
    const message = CheckValidate(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    if (!issigninform) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/143600573?s=400&u=8d5624164131fbc24f12bb92dc1cc77d5f2ae385&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("./Browse");
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign-in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("./Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-4/12  absolute mx-auto left-0 right-0 my-32 bg-black bg-opacity-85 p-12 rounded-lg shadow-2xl"
      >
        <h1 className=" font-semibold text-white text-3xl m-2">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
            ref={name}
            className="  rounded-lg py-3 m-2 p-12 w-full bg-gray-900 text-white"
            type="text"
            placeholder="Enter Your Name "
          />
        )}
        <input
          ref={email}
          className="  rounded-lg py-3 m-2 p-12 w-full bg-gray-900 text-white"
          type="text"
          placeholder="Email-Address"
        />
        <input
          ref={password}
          className="rounded-lg py-3 m-2 p-12 bg-slate-900 w-full text-white"
          type="password"
          placeholder="Passwords"
        />

        <p className=" text-red-500 p-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 m-2 mt-4  w-full bg-red-500 hover:bg-orange-700  text-center font-semibold text-white rounded-lg"
        >
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
