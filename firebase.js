// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFG9D0bFo2-AhJo57vQaIN64aTDt7C9sM",
  authDomain: "twitter-app1-319c9.firebaseapp.com",
  projectId: "twitter-app1-319c9",
  storageBucket: "twitter-app1-319c9.firebasestorage.app",
  messagingSenderId: "705323362359",
  appId: "1:705323362359:web:6cdd109bec2ac667b237b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
