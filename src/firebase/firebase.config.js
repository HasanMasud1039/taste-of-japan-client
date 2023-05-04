// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Bj9G_aAnuOOdjxg_TA3k4_t9ZEWZlcQ",
  authDomain: "taste-of-japan-80317.firebaseapp.com",
  projectId: "taste-of-japan-80317",
  storageBucket: "taste-of-japan-80317.appspot.com",
  messagingSenderId: "490838856056",
  appId: "1:490838856056:web:076ca8eeddb709e919f88d",
  measurementId: "G-918M0VN0L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;