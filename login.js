///-----firebase initialization starts-----///
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDflZD-d6fxdYOCR5VJIscksqlUdjN3QjA",
  authDomain: "dawood-first-project.firebaseapp.com",
  projectId: "dawood-first-project",
  storageBucket: "dawood-first-project.appspot.com",
  messagingSenderId: "860200939012",
  appId: "1:860200939012:web:8d74526123262371524f51"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const user = auth.currentUser;
///---- CLOSE ----///


///---get elements from html---///
const signinbtn = document.getElementById("signinBtn");
const signinBtnWithGoogle = document.getElementById("signinWithGoogle");
const signupBtn = document.getElementById("signup");
const passwordshow = document.getElementById("password");
const currentPageName = window.location.pathname.split("/").pop();
console.log(currentPageName);

///---- show password starts----///
const showPassword = () => {
  if (passwordshow.type !== "password") {
    passwordshow.type = "password";
  } else {
    passwordshow.type = "text";
  }
};
passwordshow && passwordshow.addEventListener("click", showPassword);
///--- show password ends ---- ///

///---signin with Google starts----///
const signinWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = "createpost.html";
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

signinBtnWithGoogle &&
  signinBtnWithGoogle.addEventListener("click", signinWithGoogle);
///--- signin with Google ends--- ///

///--- signin with Email start---- ///
const signInWithEmail = (e) => {
  e.preventDefault();
  const email = document.getElementById("email-field").value;
  const password = document.getElementById("password-field").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "createpost.html";
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
signinbtn && signinbtn.addEventListener("click", signInWithEmail);
///----signin with Email end ----///

///---- sign up starts----///
const signupUser = (e) => {
  e.preventDefault();
  const newemail = document.getElementById("email-user").value;
  const newpassword = document.getElementById("password-user").value;

  createUserWithEmailAndPassword(auth, newemail, newpassword)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      window.location.href = "createpost.html";
      // ...
      alert("you are signed up")
      updatePro();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
signupBtn && signupBtn.addEventListener("click", signupUser);
///---- sign up ends----///