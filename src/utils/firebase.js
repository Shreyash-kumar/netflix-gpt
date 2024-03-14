// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cuOFcecLR_roaAXidqeJfzixtajx6Mo",
  authDomain: "netflix-gpt-bfc0e.firebaseapp.com",
  projectId: "netflix-gpt-bfc0e",
  storageBucket: "netflix-gpt-bfc0e.appspot.com",
  messagingSenderId: "507048915998",
  appId: "1:507048915998:web:34a3a5e87f29f727df2a0f",
  measurementId: "G-89CV8P0XC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();