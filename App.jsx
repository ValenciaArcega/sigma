import './App.css';
import { Sign } from "./src/components/pages/Sign";
import { Home } from "./src/components/pages/Home";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { firebaseApp } from './src/credentials';
import { useState } from "react";

const auth = getAuth(firebaseApp);

export default function App() {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setGlobalUser(firebaseUser);
    else setGlobalUser(null);
  });

  return <>{globalUser ? <Home /> : <Sign />}</>;
};
