// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMTyGLsLgRAoCTA5w-ecsXaJtSudH20F0",
  authDomain: "mobile-apps-4218d.firebaseapp.com",
  projectId: "mobile-apps-4218d",
  storageBucket: "mobile-apps-4218d.firebasestorage.app",
  messagingSenderId: "1090538110493",
  appId: "1:1090538110493:web:60e940424d50338e8510f4",
  measurementId: "G-65NCMZFZHM"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

