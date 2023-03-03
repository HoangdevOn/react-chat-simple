// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE0XhMhhMp-BLHc-C8mhU1xsxKV5E6-NE",
  authDomain: "chatappsimple-e9598.firebaseapp.com",
  projectId: "chatappsimple-e9598",
  storageBucket: "chatappsimple-e9598.appspot.com",
  messagingSenderId: "967578319081",
  appId: "1:967578319081:web:29ac29ce21b85be99f1878",
  measurementId: "G-THEDHBYCPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
