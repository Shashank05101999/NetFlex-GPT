// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbrUBSz_Ee-BSlqTLTKtCFEEyWigYayq8",
  authDomain: "netflex-gpt-f7119.firebaseapp.com",
  projectId: "netflex-gpt-f7119",
  storageBucket: "netflex-gpt-f7119.appspot.com",
  messagingSenderId: "432514598755",
  appId: "1:432514598755:web:9e95642f1d1f34b644b556",
  measurementId: "G-Z97RWEMR9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
