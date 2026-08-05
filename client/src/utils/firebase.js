
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-4595f.firebaseapp.com",
  projectId: "fir-4595f",
  storageBucket: "fir-4595f.firebasestorage.app",
  messagingSenderId: "434557548090",
  appId: "1:434557548090:web:4da6c930e75bc2661c2703"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}