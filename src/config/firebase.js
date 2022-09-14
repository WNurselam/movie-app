import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxwr-_K-KMnHkUUMg2lpgtdoAuW8pyCdA",
  authDomain: "test-debe5.firebaseapp.com",
  projectId: "test-debe5",
  storageBucket: "test-debe5.appspot.com",
  messagingSenderId: "724328095536",
  appId: "1:724328095536:web:d739f1824c2aec555772f5",
  measurementId: "G-65QHQ6EN5P"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;