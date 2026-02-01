// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfdWg4rTnKZ7QGXEVuC6nBpP6Ocr2yn78",
  authDomain: "demoevm-2b1d1.firebaseapp.com",
  projectId: "demoevm-2b1d1",
  storageBucket: "demoevm-2b1d1.firebasestorage.app",
  messagingSenderId: "593839157806",
  appId: "1:593839157806:web:4361dc447419b9759965bf",
  measurementId: "G-22EPT5M3XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app); 
const storage = getStorage(app); 
export { app, db, storage };  