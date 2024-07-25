import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Redux/UserSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleClicklogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-screen  bg-gradient-to-b z-10 from-black flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="  flex m-3 p-1  ">
          <img
            className="w-15 h-12 cursor-pointer rounded-full mx-4 "
            src={user?.photoURL}
            alt="sign-out"
          />
          <button
            onClick={handleClicklogout}
            className="hover:bg-red-600 px-2 bg-red-700  rounded-full font-semibold text-white"
          >
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
