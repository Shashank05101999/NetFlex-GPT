import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Redux/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
const Body = () => {
  const dispatch = useDispatch();
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName    ,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser(null));
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};
export default Body;
