
import { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const SocialLoginBtn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
  .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setUser(loggedInUser);
  })
  .catch(error => {
      console.log('error ', error.message)
  })
}

const handleGithubSignIn = () =>{
  signInWithPopup(auth, githubProvider)
  .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
  })
  .catch(error => {
      console.log(error);
  })
}
  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
        onClick={handleGoogleSignIn}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img onClick={handleGithubSignIn}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
