import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between px-8 py-2 w-full bg-gradient-to-b from-black z-30">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <button
            className="ml-2 border-2 border-[#74AA9C] rounded-lg px-1.5 py-1 text-[#74AA9C] cursor-pointer hover:bg-[#74AA9C] hover:text-[#d0e2dd]"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Home Page"}
          </button>
          <img
            className="ml-2 mt-1 h-8 w-8 rounded"
            src={user?.photoURL}
            alt=""
          />
          <button
            className="ml-2 border-2 border-red-600 rounded-lg px-1.5 py-1 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
