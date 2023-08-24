// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDGMOl9T0C3-krjLJgtrc7RzyWBUPyOQ_g",
  // authDomain: "reactgames-ae7dd.firebaseapp.com",
  // projectId: "reactgames-ae7dd",
  // storageBucket: "reactgames-ae7dd.appspot.com",
  // messagingSenderId: "678509035226",
  // appId: "1:678509035226:web:12b58db9ddde7a8fd02fe3",
  // measurementId: "G-8CPRSGP436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);