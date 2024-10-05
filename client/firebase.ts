// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmzRe6Y9n_k_ZdOydg4HDvNaj0qT4svo",
  authDomain: "notion-portfolio-29a0b.firebaseapp.com",
  projectId: "notion-portfolio-29a0b",
  storageBucket: "notion-portfolio-29a0b.appspot.com",
  messagingSenderId: "739530995944",
  appId: "1:739530995944:web:8a1e12536f2b5482e8715d",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
