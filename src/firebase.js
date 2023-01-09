import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW05-iatw-M3CzGHthFE5-y6bYHv9eJ2M",
  authDomain: "final-project-siit29.firebaseapp.com",
  projectId: "final-project-siit29",
  storageBucket: "final-project-siit29.appspot.com",
  messagingSenderId: "1016542003818",
  appId: "1:1016542003818:web:59ef7999bcf5c273aec013",
  measurementId: "G-Z835MS8QY0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
