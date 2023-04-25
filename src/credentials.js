import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1pwNuw_k-ye8jA3cYcCwGX1plKIWt-n4",
  authDomain: "sigma-c1c73.firebaseapp.com",
  projectId: "sigma-c1c73",
  storageBucket: "sigma-c1c73.appspot.com",
  messagingSenderId: "576173332217",
  appId: "1:576173332217:web:13a393182c451e0ebdf428"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };

/*
Consideraciones de reglas ❗❗

les_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 🅰
    match /users/{document=**} {
      allow read, write: if request.auth != null;
    }
    // 🅱
    match /posts/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/