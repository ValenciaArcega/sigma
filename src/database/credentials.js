// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZJLlMC9nsgNclVnmgLHuwHPxnSmkm_Mw",
  authDomain: "sigfea.firebaseapp.com",
  projectId: "sigfea",
  storageBucket: "sigfea.appspot.com",
  messagingSenderId: "13445887862",
  appId: "1:13445887862:web:ef45b027ce735fb6486c57"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };