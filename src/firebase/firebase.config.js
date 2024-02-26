// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSkBInX4r12-GdLHCIorJuzI55XaLqGjc",
  authDomain: "skill-assessment-task.firebaseapp.com",
  projectId: "skill-assessment-task",
  storageBucket: "skill-assessment-task.appspot.com",
  messagingSenderId: "693341466688",
  appId: "1:693341466688:web:873a7c39bf322c65272fa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
